import React from 'react'
import { useRouter } from 'next/router'
import Tooltip from '@mui/material/Tooltip'
import menuStyle from '/modules/menu/Menu.module.scss'
import Close from '@mui/icons-material/Close'

const Module = props => {
    const router = useRouter()
    const searchRef = React.useRef()
    const searchOverlayRef = React.useRef()
    const searchBarRef = React.useRef()
    const [ overlaySearch, setOverlaySearch ] = React.useState(false)
    const handleOnFocus = React.useCallback(e => {
        if (!searchBarRef?.current?.classList?.contains('searchBarActive')) {
            searchBarRef.current.classList.add('searchBarActive')
            searchBarRef.current.classList.add(menuStyle.searchBarActive)
        }
    })
    const handleOnBlur = React.useCallback(e => {
        if (searchBarRef?.current?.classList?.contains('searchBarActive')) {
            searchBarRef.current.classList.remove('searchBarActive')
            searchBarRef.current.classList.remove(menuStyle.searchBarActive)
        }
    })

    const handleToggleSearch = React.useCallback(e => {
        if (!overlaySearch) {
            setOverlaySearch(true)
        } else {
            setOverlaySearch(false)
        }
    })

    const handleClose = React.useCallback(e => {
        setOverlaySearch(false)
    })

    const onKeyDown = React.useCallback(e => {
        if (e?.key && (e.key == "Enter" || e.charCode == 13)) {
            const value = e?.currentTarget?.value ?? ''
            if (props?.domainUrl) {
                const useUrl = props?.devAddress ? `${props.devAddress}/s?v=${value}` : `https://${props.domainUrl}/s?v=${value}`
                if (router.pathname === '/s') {
                    router.reload()
                } else {
                    router.push(useUrl)
                }
            }
        }
    })

    return (
        <div className={`${menuStyle.searchContainer} Menu_searchContainer`}>
            <div className={`${menuStyle.searchBarSmall} Menu_searchBarSmall`}>
                <Tooltip title='Search' placement='bottom'>
                    <li className={`${menuStyle.menuLink} darkMenuLink menuLinkSelector`} style={{ alignSelf: 'center' }} onClick={handleToggleSearch}>
                        <span className={`${menuStyle.menuLinkText}`}>
                            <div className={`${menuStyle.menuText}`}>Search</div>
                            <div className={`${menuStyle.menuLinkIconPair} ${menuStyle.maxIconWidth} search material-icons`}>search</div>
                        </span>
                        <div className={`${menuStyle.menuLinkIcon} ${menuStyle.maxIconWidth} search material-icons`}>search</div>
                    </li>
                </Tooltip>
                <div className={`${menuStyle.searchOverlayContainer} ${overlaySearch ? `${menuStyle.searchOverlayContainerVisible}` : ''}`}>
                    <div className={`${menuStyle.searchBar} ${menuStyle.searchBarSmallContainer} Menu_searchBar Menu_searchBarSmallContainer`} ref={searchBarRef}>
                        <div className='material-icons'>search</div>
                        <input className={`${menuStyle.searchBarInternal} Menu_searchBarInternal`} ref={searchOverlayRef} type='text' placeholder={props?.placeholder ?? 'Search..'} onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyDown={onKeyDown} defaultValue={router?.pathname === '/s' && router?.query?.v ? router.query.v : ''} />
                        <Close className={'Misc_Icon_Button'} onClick={handleClose} style={{ color: 'black' }}></Close>
                    </div>
                </div>
            </div>
            <div className={`${menuStyle.searchBar} Menu_searchBar`} ref={searchBarRef}>
                <div className='material-icons'>search</div>
                <input className={`${menuStyle.searchBarInternal} Menu_searchBarInternal`} ref={searchRef} type='text' placeholder={props?.placeholder ?? 'Search..'} onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyDown={onKeyDown} defaultValue={router?.pathname === '/s' && router?.query?.v ? router.query.v : ''} />
            </div>
        </div>
    )
}

export default Module
