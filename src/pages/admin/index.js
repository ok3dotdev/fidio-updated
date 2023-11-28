/* eslint-disable react-hooks/rules-of-hooks */
// If you want to use this as a template for another page, copy entire file and rename "pageName". Use pageDefault variable in app.config.js appropriately.

import React from 'react'
import { useRouter } from 'next/router'
import resolveConfig, { resolveVariables, pageDefaults } from '/app.config'
import { basicError, generateComponent, handlePropsPriority, resolvePage, getServerSidePropsDefault, resolveDefaults } from '/modules/utility.js'
import { isObjectEmpty } from '/modules/util'
import { Menu } from '/modules/menu/'
import { Admin } from '/modules/admin'
import { SignIn } from '/modules/onboarding/signin'

const pageName = 'admin'

export const page = props => {
    const router = useRouter()
    const { query, asPath } = router
    const [ fetching, setFetching ] = React.useState(false)
    const [ mergeProps, setMergeProps ] = React.useState({})
    const variables = resolveVariables()
    let config = resolveConfig(variables, props)
    let resolvedPage = resolvePage(config, props.path)

    const getDefaults = async force => {
        const defaults = await resolveDefaults(resolvedPage.url, props, variables, query, asPath, setFetching, force)
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
	return (
        <React.Fragment>
            <div className={`${pageName}_Body`}>
                <SignIn {...useProps}></SignIn>
                <Admin {...useProps}></Admin>
            </div>
        </React.Fragment>
	)
}

export const getServerSideProps = async (context) => {
	return await getServerSidePropsDefault(context, pageDefaults[pageName])
}

export default page