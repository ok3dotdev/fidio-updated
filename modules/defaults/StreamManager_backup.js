import React from 'react'
import PageErrorModule from '/modules/utility/utility/component/PageErrorModule'
import { BeginStream, CurrentlyStreaming, PermissionsModule, StreamOn, StreamTitleInput, StreamMoreSettings, StreamSettings, UpcomingStreams, StreamUpdateSettings, TerminateStream, NowStreaming} from '/modules/streaming/manager/parts'
import Preview from '/modules/streaming/watch/preview/Preview'
import { Username } from '/modules/onboarding/signin'

const Module = props => {
    const { askEndStream, fetchBusy, currentlyStreaming, ManagerStyles, streamChecking, canStream, moreSettings, settingsHeight, moreSettingsContainerRef, handleAskEndStream } = props
    return (
        <div className={`${ManagerStyles.container} ${props.className}`}>
            <PageErrorModule { ...props } />
            {
                props._loggedIn && props._loggedIn.username
                    ? <div className={`${ManagerStyles.settingsSectionContainer} flex gap-p5`}>
                        <div className={`${ManagerStyles.settingContainer} ${ManagerStyles.streamingInfoContainer} ${currentlyStreaming ? `${ManagerStyles.isStreamingContainer}` : ''}`}>
                            <div className={`spinner spinnerBig ${streamChecking ? 'opacity1 spinnerRelative' : 'opacity0 spinnerHide'}`}></div>
                            <PermissionsModule { ...props } />
                            <NowStreaming { ...props } />
                            {
                                currentlyStreaming
                                    ? <Preview { ...props } useWatchDataPreview={currentlyStreaming} />
                                    : null
                            }
                            <CurrentlyStreaming { ...props } />
                            {
                                canStream
                                    ? <div style={{ height: '100%' }}>
                                        <StreamOn { ...props} />
                                        {
                                            !fetchBusy
                                                ? <div style={{ alignItems: 'center', marginBottom: '.125rem', height: 'inherit' }}>
                                                    <BeginStream { ...props } />
                                                    <div>
                                                        <div className={`${ManagerStyles.settingsContainer} Manager_SettingsContainer`} style={{ marginBottom: '.25rem' }}>
                                                            <StreamTitleInput { ...props } />
                                                            <StreamMoreSettings { ...props} />
                                                        </div>
                                                        <div className={`${ManagerStyles.moreSettingsContainer} Manager_MoreSettingsContainer ${ManagerStyles.moreSettingsClosed} Manager_MoreSettingsContainerClosed ${moreSettings ? `${ManagerStyles.moreSettingsOpen} Manager_MoreSettingsContainerOpen` : ``}`} ref={moreSettingsContainerRef} style={{ height: settingsHeight }}>
                                                            <div className={`${ManagerStyles.moreSettingsInternalContainer} Manager_MoreSettingsInternalContainer`} note='This controls height of open settings'>
                                                                <StreamSettings { ...props } />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <UpcomingStreams { ...props } />
                                                </div>
                                                : <div style={{ fontSize: '.85rem' }}>Please wait...</div>
                                        }
                                    </div>
                                    : null
                            }
                            {
                                currentlyStreaming
                                    ? !askEndStream
                                        ? <React.Fragment>
                                            <StreamUpdateSettings { ...props } />
                                            <button style={{ width: '100%', marginTop: '.25rem', lineHeight: '12.5px', fontSize: '.8rem' }} onClick={handleAskEndStream}>Terminate Stream</button>
                                        </React.Fragment>
                                        : <TerminateStream { ...props } />
                                    : null
                            }
                        </div>
                    </div>
                    : <div>
                        <h4 style={{ marginTop: 0, padding: '0 .25rem' }}>{props._loggedIn ? !props._loggedIn.username ? 'Please register Username to begin streaming' : 'Please login to begin streaming' : null}</h4>
                        <Username { ...props } />
                    </div>
            }
        </div>
    )
}

export default Module
