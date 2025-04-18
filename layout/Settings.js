import React from 'react'
import Styles from '@tycoonsystems/tycoon-modules/settings/Settings.module.scss'
import AvatarManagement from '@tycoonsystems/tycoon-modules/settings/parts/AvatarManagement'


const Module = props => {
    const { handleSetTab, settingsConfig, resolveInitials, doChangeProfilePicture, handleChangeProfilePicture, avatarFileInput, handleCloseError, pageError, resolveCurrentItem, setPageError, currentTab, fetchBusy, setFetchBusy } = props

    return (
        <div class='pt-[150px] md:pt-[100px] max-w-screen-xl mx-auto px-4'>
            <div className={`${fetchBusy ? 'fetchNotBusy fetchBusy' : 'fetchNotBusy'}`}></div>
			<div className={`${Styles.Settings_Container}`}>
				<div className={`${Styles.Settings_InternalContainer}`} style={{ width: '100%' }}>
					<div className={`${Styles.Settings_Menu}`} style={{ justifyContent: 'right' }}>
						{
							settingsConfig?.tabs
								? settingsConfig.tabs.map(tab => (
									<React.Fragment>
										<div className={`${Styles.tab} ${settingsConfig?.tabs && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab].label === tab?.label ? `${Styles.currentTab}` : ''}`} onClick={handleSetTab} modif={tab?.label}>{tab?.label ?? ''}</div>
									</React.Fragment>
								))
								: null
						}
					</div>
					<div style={{ marginTop: '1rem' }}>
						<h1 style={{ fontSize: '3.6rem', fontWeight: 600 }}>{`${currentTab !== null && settingsConfig?.tabs?.[currentTab]?.label ? `${settingsConfig.tabs[currentTab].label.charAt(0).toUpperCase()}${settingsConfig.tabs[currentTab].label.substring(1, settingsConfig.tabs[currentTab].label.length)}` : ''}`}</h1>
					</div>
					<div className={`${Styles.Settings_Data}`}>
						<AvatarManagement { ...props } />
						<div className={`${Styles.settingsItemContainer}`}>
							{
                                pageError ?
                                    <p className='error' style={{ marginTop: '.5rem' }} onClick={handleCloseError}>{pageError}</p> 
                                : null
                            }
							{
								settingsConfig?.tabs && currentTab !== null && settingsConfig.tabs[currentTab] && settingsConfig.tabs[currentTab]?.items && Array.isArray(settingsConfig.tabs[currentTab]?.items)
									? settingsConfig.tabs[currentTab].items.map(item => {
											return (
												<div key={item.type}>
													{resolveCurrentItem(item.type)}
												</div>
											)
										}
								  )
								: null}
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Module
