/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react'
import { useRouter } from 'next/router'
import resolveConfig, { pageDefaults } from '/app.config'
import { basicError, generateComponent, handlePropsPriority, resolvePage, getServerSidePropsDefault, resolveDefaults } from '/modules/utility.js'
import { isObjectEmpty } from '/modules/util'
import { Menu } from '/modules/menu/'

const pageName = 'terms'

export const page = props => {
    const router = useRouter()
    const { query, asPath } = router
    const [ fetching, setFetching ] = React.useState(false)
    const [ mergeProps, setMergeProps ] = React.useState({})
    let resolvedDefinition = props.resolvedDefinition
    let resolvedPage = resolvePage(resolveConfig(props._configVariables, props), props.path)
    resolvedDefinition = resolvedPage && resolvedPage.data // Access the `data` property

    const getDefaults = async force => {
        const defaults = await resolveDefaults(resolvedPage.url, props, props._configVariables, query, asPath, setFetching, force)
        if (!isObjectEmpty(defaults)) {
            const newProps = Object.assign({...props}, defaults)
            setMergeProps(newProps)
        }
    }
    
    props._LocalEventEmitter.unsubscribe('refetchDefaults')
    props._LocalEventEmitter.subscribe('refetchDefaults', e => {
        getDefaults(true)
    })

    React.useEffect(() => {
        if (resolvedPage && resolvedPage.url && !fetching && isObjectEmpty(mergeProps)) {
            getDefaults()
        }
    }, [ fetching, mergeProps, resolvedPage ])

    const useProps = handlePropsPriority(mergeProps, props)
    resolvedPage = resolvePage(resolveConfig(props._configVariables, useProps), useProps.path)
    resolvedDefinition = resolvedPage && resolvedPage.data // Access the `data` property
    const components = generateComponent(resolvedDefinition)
	return (
        <React.Fragment>
            <Menu {...useProps}></Menu>
            <div className={`${pageName}_Body ${props.pageClass ?? ''}`} style={{ top: useProps.menuConfig.height ? useProps.menuConfig.height + 'px' : '' }}>{components}</div>
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
	return await getServerSidePropsDefault(context, pageDefaults[pageName])
}

export default page