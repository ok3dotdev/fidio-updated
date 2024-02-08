import React from 'react'
import { AdminPanel, ProfileCard, UserFeed, UserShop } from '../modules/profile'

const Module = props => {
    return (
        <div>
            <AdminPanel { ...props } />
            {
                props?.profileData?.user
                    ? <div>
                        <ProfileCard { ...props } />
                        <UserFeed { ...props } />
                        <UserShop { ...props } />
                    </div>
                    : null
            }
        </div>
    )
}

export default Module
