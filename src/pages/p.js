/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { useRouter } from 'next/router'
import { fetchPost } from '/modules/utility/fetch'
import resolveConfig, { resolveVariables } from '/app.config'
import { basicError, generateComponent, resolvePage, getServerSidePropsDefault, resolveDefaults } from '/modules/utility.js'
import { isObjectEmpty } from '/modules/util'


export const page = props => {
    const router = useRouter()
    const { query, asPath } = router
    const [ fetching, setFetching ] = React.useState(false)
    const [ mergeProps, setMergeProps ] = React.useState({})
    let resolvedDefinition = props.resolvedDefinition
    const variables = resolveVariables()
    let config = resolveConfig(variables, props)
    let resolvedPage = resolvePage(config, props.path)
    resolvedDefinition = resolvedPage && resolvedPage.data // Access the `data` property

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

    const useProps = isObjectEmpty(mergeProps) ? props : mergeProps
    config = resolveConfig(variables, useProps)
    resolvedPage = resolvePage(config, useProps.path)
    resolvedDefinition = resolvedPage && resolvedPage.data // Access the `data` property
    const components = generateComponent(resolvedDefinition)
	return (
        <div>{components}</div>
	)
}

export const getServerSideProps = async (context) => {
	return await getServerSidePropsDefault(context)
}

export default page