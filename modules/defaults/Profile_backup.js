import React from 'react'
import { SignIn, Username } from '/modules/onboarding/signin'
import GridList from '/modules/video/player/gridList'
import { AdminPanel, BeginStream, UsernameContainer, UserFeed, UserIcon, UserShop } from '/modules/profile'

const Module = props => {
    return (
        <div>
            <AdminPanel { ...props } />
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
                        <div className='ProfilePage_Feed'>
                            <GridList loggedIn={props._loggedIn} _gridItems={props.videoCombinedFeed ?? []} _gridListType={'video'} {...props}></GridList>
                        </div>
                        <UserShop { ...props } />
                    </div>
                    : null
            }
        </div>
    )
}

export default Module
