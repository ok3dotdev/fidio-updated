import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menuStyle from './Menu.module.scss';
const SubMenu = props => {
  let {
    loggedIn,
    ...rest
  } = props;
  const myLoader = ({
    src
  }) => {
    if (src.match(/greythumb/)) {
      return `${src}`;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
      return `${props.cdn.static}/${src}`;
    }
  };
  return <div className={`${props._loggedIn ? `${menuStyle.subMenu}` : `${menuStyle.subMenu} ${menuStyle.subMenuBottomPadding} subMenuContainer`} ${props.className}`}>
            {props.menuConfig && props.menuConfig.left ? props.menuConfig.left.map((c, i) => <React.Fragment key={i}>
                            {c.type ? c.type === 'home' ? <Link href="/" style={{
        alignSelf: 'center'
      }} className={`menuLinkSelector ${c.className}`} key={i} onClick={props.handleToggleMenuOff ?? null}>
                                            <span href="/" className={`${menuStyle.subMenuItemContainer} darkModeHoverEnforce`} alt="Home" title="Home">
                                                <div className={`${menuStyle.itemName} home.itemName`}>Home</div>
                                                <div className={`${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} home material-icons`}>home</div>
                                            </span>
                                        </Link> : c.type === 'watch' ? <Link href="/w" className={`${menuStyle.menuLink} menuLinkSelector ${c.className}`} style={{
        alignSelf: 'center'
      }} key={i} onClick={props.handleToggleMenuOff ?? null}>
                                            <span href="/w" className={`${menuStyle.subMenuItemContainer} darkModeHoverEnforce`} alt="Watch" title="Watch">
                                                <div className={`${menuStyle.itemName} home.itemName`}>Watch</div>
                                                <div className={`${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} tv material-icons`}>tv</div>
                                            </span>
                                        </Link> : c.type === 'img'
      //     ? <img src={props.cdn.static ? `${props.cdn.static}/${c.src}` : ''} alt={c.name} style={{ width: c.width, height: c.height }} />
      ? <div className={`img_control menuLinkSelector ${c.className}`} style={{
        width: c.width ? c.width + 'px' : '40px',
        height: c.height ? c.height + 'px' : '20px',
        alignSelf: 'center'
      }} key={i}>
                                        {c.href ? <Link href={c.href} onClick={props.handleToggleMenuOff ?? null}>
                                                    <Image loader={() => {
            if (c.src.match(/greythumb/) || c.local) {
              return `${c.src}`;
            } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
              return `${props.cdn.static}/${c.src}`;
            }
          }} src={c.src && props.cdn && props.cdn.static ? c.src : 'img/default/greythumb.jpg'} alt={c.name ? c.name : ""} width={c.width ?? '80'} height={c.height ?? '40'} layout="responsive" />
                                                </Link> : <Image loader={() => {
          if (c.src.match(/greythumb/) || c.local) {
            return `${c.src}`;
          } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0) {
            return `${props.cdn.static}/${c.src}`;
          }
        }} src={c.src && props.cdn && props.cdn.static ? c.src : 'img/default/greythumb.jpg'} alt={c.name ? c.name : ""} width={c.width ?? '80'} height={c.height ?? '40'} layout="responsive" />}
                                    </div> : c.type === 'link' ? <Link href={c.href} className={`${menuStyle.menuLink} menuLinkSelector ${c.className}`} style={{
        alignSelf: 'center'
      }} key={i} onClick={props.handleToggleMenuOff ?? null}>
                                            <span href={c.href} className={`${menuStyle.subMenuItemContainer} darkModeHoverEnforce`} alt={c.name} title={c.name}>
                                                <div className={`${menuStyle.itemName} home.itemName`}>{c.name}</div>
                                                <div className={`${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} material-icons`}>{c.muiIcon}</div>
                                            </span>
                                        </Link> : null : null}
                        </React.Fragment>) : null}
            {/* <Link href="/">
                <a href="/" className={`${menuStyle.subMenuItemContainer} ${home.darkModeHoverEnforce}`} alt="Orders" title="Orders">
                    <div className={`${menuStyle.itemName} ${home.itemName}`}>Orders</div>
                    <div className={`${menuStyle.subMenuItem} inventory material-icons`}>inventory</div>
                </a>
             </Link> */}
            {/* <Link href="/">
                <a href="/" className={`${menuStyle.subMenuItemContainer} ${home.darkModeHoverEnforce}`} alt="Messages" title="Messages">
                    <div className={`${menuStyle.itemName} ${home.itemName}`}>Messages</div>
                    <div className={`${menuStyle.subMenuItem} messages material-icons`}>mail</div>
                </a>
             </Link> */}
            {/* <Link href="/upload">
                <span href="/upload" className={`${menuStyle.subMenuItemContainer} darkModeHoverEnforce`} alt="Upload" title="Upload">
                    <div className={`${menuStyle.itemName} itemName`}>Upload</div>
                    <div className={`${menuStyle.subMenuItem} post material-icons`}>publish</div>
                </span>
             </Link> */}
        </div>;
};
export default SubMenu;