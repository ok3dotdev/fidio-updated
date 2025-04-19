import React from 'react'
import { Account, Admin, Bug, Feedback, GoLive, Location, Login, OffersAndGifts, OnboardLogin, Orders, Payment, Settings, SignOut, User, Help, Invite, SimpleDropMenuLink, Upload } from '@tycoonsystems/tycoon-modules/menu/parts'
import { Username } from '@tycoonsystems/tycoon-modules/onboarding/signin'


const Module = props => {
    return (
        <React.Fragment>
            {
                props._loggedIn
                    ? <div className={`menuLinkSelector`} style={{ alignSelf: 'center' }}>
                        <User { ...props } />
                        {
                            props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' || props._closingMain
                                ? <div className={`dropMenu ${props?._openingMain ? 'opacity1 Misc_Container_Visible' : 'opacity0'}`}>
                                    <ul>
                                        <Account { ...props } />
                                        <Username { ...props } />
                                        <GoLive { ...props } />
                                        <Upload { ...props } />
                                        <Invite { ...props } />
                                        <div style={{ borderTop: '1px solid grey', margin: '.25rem 0' }}></div>
                                        <Settings { ...props } />
                                        <Orders { ...props } />
                                        <Payment { ...props } />
                                        <div style={{ borderTop: '1px solid grey', margin: '.25rem 0' }}></div>
                                        <OffersAndGifts { ...props } />
                                        <Location { ...props } />
                                        <div style={{ borderTop: '1px solid grey', margin: '.25rem 0' }}></div>
                                        <SignOut { ...props } />
                                        <div style={{ borderTop: '1px solid grey', margin: '.25rem 0' }}></div>
                                        <Help { ...props } />
                                        <Feedback { ...props } />
                                        <Bug { ...props } />
                                        <Admin { ...props } />
                                    </ul>
                                </div>
                                : null
                        }
                    </div>
                : <div className={`menuLinkSelector`} style={{ alignSelf: 'center' }}>
                    <Login { ...props } />
                    {
                        props._openMenu && props._openMenu.currentMenu && props._openMenu.currentMenu == 'main_settings' || props._closingMain
                            ? <div className={`dropMenu ${props?._openingMain ? 'opacity1 Misc_Container_Visible' : 'opacity0'}`}>
                                <ul>
                                    <OnboardLogin { ...props } />
                                    <div style={{ borderTop: '1px solid grey', margin: '.25rem 0' }}></div>
                                    <GoLive { ...props } />
                                    <Upload { ...props } />
                                    <Invite { ...props } />
                                    <div style={{ borderTop: '1px solid grey', margin: '.25rem 0' }}></div>
                                    <Help { ...props } />
                                    <Feedback { ...props } />
                                    <Bug { ...props } />
                                </ul>
                            </div>
                            : null
                    }
                </div>
            }                                             
        </React.Fragment>
    )
}

export default Module
