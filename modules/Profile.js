import React from 'react'
import { SignIn, Username } from '../modules/onboarding/signin'
import { AdminPanel, BeginStream, UsernameContainer, UserFeed, UserIcon, UserShop } from '../modules/profile'

const Module = props => {
    return (
        <div>
            <AdminPanel { ...props } />
            <SignIn redirectOnAuth={'/p'} { ...props } />
            <Username { ...props } />
            {
                props?.profileData?.user
                    ? <div>
                        <div className={`${props?.className ?? ''} flex wrap gap-p10 PagePadding pTop ProfilePage_ProfileContainer`}>
                            <UserIcon { ...props } />
                            <div className={`flex wrap gap-p5`} style={{ height: 'fit-content' }}>
                                <UsernameContainer { ...props } />
                                <BeginStream { ...props } />
                            </div>
                        </div>
                        <UserFeed { ...props } />
                        <UserShop { ...props } />
                    </div>
                    : null
            }
        </div>
    )
}

export default Module
