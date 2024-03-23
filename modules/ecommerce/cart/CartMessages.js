import React from 'react';
const Module = props => {
  return <React.Fragment>
            {props?.cartMessages?.length > 0 ? <div className='flex gap-p3' style={{
      paddingBottom: '.25rem'
    }}>
                        {props.cartMessages.map(m => <div style={{
        background: 'rgba(34, 34, 34, 1)',
        borderRadius: '.5rem',
        padding: '.25rem',
        width: '-webkit-fill-available',
        textAlign: 'center',
        width: '100%'
      }}>
                                    <div>{m.message}</div>
                                    {m.href ? <span>&nbsp;
                                                <span>
                                                    <a href={m.href}>
                                                        <button style={{
                padding: '.25rem 1rem'
              }}>{m.hrefCta}</button>
                                                    </a>
                                                </span>
                                            </span> : null}
                                </div>)}
                    </div> : null}
        </React.Fragment>;
};
export default Module;