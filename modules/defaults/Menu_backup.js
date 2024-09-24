import React from 'react'
import SubMenu from '/modules/menu/SubMenu.js'
import menuStyle from '/modules/menu/Menu.module.scss'

const Module = props => {
    return (
        <div className='Menu_MenuContainerInternal' style={{ padding: props?.menuPadding ?? '' }}>
            <nav aria-label='breadcrumb'>
                <ol style={{ paddingBottom: 0, paddingTop: 0, maxHeight: '100%' }} className={`margin1600 menuContainer`}>
                    <div className={`${props._loggedIn ? `${menuStyle.subMenu}` :  `${menuStyle.subMenu} ${menuStyle.subMenuBottomPadding} subMenuContainer`} ${menuStyle.menu}`}>
                        <SubMenu { ...props } type='img' name={'Platform'} width={80} heigth={20} src={'https://d2p2h79srr15gg.cloudfront.net/img/LOGO-rainbow.png'} local={true} href={'https://www.tycoon.systems'}></SubMenu>
                        <SubMenu { ...props } type='watch'></SubMenu>
                    </div>
                    <div className={`${props._loggedIn ? `${menuStyle.subMenu}` :  `${menuStyle.subMenu} ${menuStyle.subMenuBottomPadding} subMenuContainer`} ${menuStyle.menu}`}>
                        <SubMenu {...props} type='link' muiIcon={'upload'} name='Upload' href={`https://${props?.domainUrl}/upload`}></SubMenu>
                        <SubMenu {...props} type='stream' href={'p?a=openbeginstream'} small={true}></SubMenu>
                        <SubMenu {...props} type='notifications' small={true}></SubMenu>
                        <SubMenu {...props} type='cart'></SubMenu>
                        <SubMenu {...props} type='user'></SubMenu>
                    </div>
                </ol>
            </nav>
        </div>
    )
}

export default Module
