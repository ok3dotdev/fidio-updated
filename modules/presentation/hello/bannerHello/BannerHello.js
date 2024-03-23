import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Styles from '../../Presentation.module.scss';
import { v4 as uuidv4 } from 'uuid';
const moduleName = 'BannerHello';
const Module = props => {
  const router = useRouter();
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const bgContainerRef = React.useRef();
  const typeContainerRef = React.useRef();
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setComponentDidMount(true);
    }
  }, [componentDidMount]);
  const resolveImage = (img, type) => {
    if (props?.raw && type === 'img') {
      return img;
    } else if (props.cdn && props.cdn.static && props.cdn.static.length > 0 && img) {
      return `${props.cdn.static}/${img}`;
    }
    return 'img/default/greythumb.jpg';
  };
  const resolveType = () => {
    return <div className={`${Styles.TypeContainer}`} ref={typeContainerRef}>
                <div className={`${props?.tall ? `${Styles.TypeContainerEnforceSpace}` : null}`}>
                    {props.lead ? <h2 className={`${Styles.Lead} ${moduleName}_Lead ${props?.classes?.Lead}`}>{props.lead}</h2> : null}
                    {props.leadImg ? <div className={`${Styles.leadImgContainer} ${moduleName}_LeadImg`}>
                                <img className={`${Styles.leadImg} ${moduleName}_LeadImg_img ${props?.classes?.Lead}`} src={`${props.leadImg}`} />
                            </div> : null}
                    {props.text ? <div className={`${Styles.Text} ${moduleName}_Text ${props?.classes?.Text}`}>{props.text}</div> : null}
                    {props?.childrenBefore?.map ? React.Children.map(props.childrenBefore, function (child) {
          if (child !== null) {
            if (typeof child.type === 'function') {
              const cpProps = {
                bgContainerRef: bgContainerRef,
                typeContainerRef: typeContainerRef
              };
              return React.cloneElement(child, cpProps);
            }
            return child;
          }
          return React.createElement('div');
        }) : null}
                </div>
                <div>
                    {props?.children?.map ? React.Children.map(props.children, function (child) {
          if (child !== null) {
            if (typeof child.type === 'function') {
              const cpProps = {
                bgContainerRef: bgContainerRef,
                typeContainerRef: typeContainerRef
              };
              return React.cloneElement(child, cpProps);
            }
            return child;
          }
          return React.createElement('div');
        }) : null}
                </div>
            </div>;
  };
  return <div className={`${Styles.BannerHello} ${moduleName}_Container ${props.className}`}>
            <div className={`${Styles.IndexBgContainerAd} ${moduleName}_IndexBgContainerAd ${props?.classes?.IndexBgContainerAd} ${props?.tall ? `${Styles.IndexBgContainerAdTall}` : ''} ${props?.center ? `${Styles.IndexBgContainerCenter}` : ''}`} ref={bgContainerRef}>
                {props.href ? <Link href={`${props.href}`} draggable={false}>
                            <div style={{
          backgroundImage: `url(${resolveImage(props?.img ?? null, 'img')})`,
          height: '100%',
          backgroundSize: 'cover',
          borderRadius: '1rem',
          position: 'relative'
        }}>
                                {resolveType()}
                            </div>
                        </Link> : <div style={{
        backgroundImage: `url(${resolveImage(props?.img ?? null, 'img')})`,
        height: '100%',
        backgroundSize: 'cover',
        borderRadius: '1rem',
        position: 'relative'
      }}>
                            {resolveType()}
                        </div>}
            </div>
        </div>;
};
export default Module;