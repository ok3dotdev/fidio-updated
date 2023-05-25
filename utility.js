import React from 'react'
import SignIn from '/modules/onboarding/signin/SignIn'
import { useRouter } from 'next/router'


const resolveComponent = json => {
    console.log(json)
    if (json.type) {
        switch(json.type) {
            case 'SignIn':
                return <SignIn {...json.props}>{json.children && json.children.map ? json.children.map(generateComponent) : null}</SignIn>
            default:
                return null
        }
    }
    return null
}

const resolvePage = (def, path) => {
    if (def && def.temporaryComponents && def.temporaryComponents.pages) {
        const match = def.temporaryComponents.pages.find(pg => {
            if (path && path == pg.url) {
                return true
            } else if (global && global.location && global.location.pathname && pg.url === global.location.pathname) {
                return true
            }
            return false
        })
        return match
    }
    return null
}

function generateComponent(json) {
    const { type, props, children } = json
  
    // If the type is a string, create a React element
    if (typeof type === 'string') {
        // Check if the type is the custom component
        const matchComponent = resolveComponent(json)
        if (matchComponent) {
            return matchComponent
        }
        if (children && children.map) {
            const childElements = children && children.map(generateComponent)
            return React.createElement(type, props, ...childElements)
        }
    }
    if (type) {
        return type
    }
    // If the type is a function/component, directly return it
    return json
}

export {
    generateComponent,
    resolvePage
}