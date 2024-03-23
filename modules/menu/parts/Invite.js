var _div, _div2;
import React from 'react';
import { inviteFriend } from '../../social/utility';
const Module = props => {
  const [inputField, setInputField] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(null);
  const inputFieldRef = React.useRef();
  const resetRef = React.useRef();
  const handleInviteFriend = React.useCallback(e => {
    if (!inputField) {
      setInputField(true);
    }
  });
  const handleSubmitFriendRequest = React.useCallback(e => {
    const f = async email => {
      if (email) {
        await inviteFriend(props.apiUrl, props.domainKey, props._loggedIn, {
          email: email
        });
        setSubmitted(email);
        setInputField(false);
        if (inputFieldRef?.current) {
          inputFieldRef.current.value = '';
        }
        resetRef.current = setTimeout(() => {
          setSubmitted(null);
        }, 10000);
      }
    };
    const value = inputFieldRef?.current?.value && inputFieldRef.current.value !== '' ? inputFieldRef.current.value : '';
    if (value) {
      f(value);
    }
  });
  const handleSendAnother = React.useCallback(e => {
    setSubmitted(null);
    setInputField(true);
    if (resetRef.current) {
      clearTimeout(resetRef.current);
    }
  });
  return <React.Fragment>
            {props._loggedIn ? <React.Fragment>
                        {props._loggedIn?.username ? <div className={`menuLinkSelector`} onClick={handleInviteFriend} style={{
        position: 'relative',
        alignSelf: 'center'
      }}>
                                        {submitted ? <li>
                                                {_div || (_div = <div className={`material-icons`}>send</div>)}
                                                <div onClick={handleSendAnother} className='max-width-dropdown'>Sent request to <span style={{
              fontWeight: 600
            }}>{submitted}</span></div>
                                            </li> : !inputField ? <li>
                                                    {_div2 || (_div2 = <div className={`material-icons`}>send</div>)}
                                                    <div onClick={handleInviteFriend}>Invite Friend</div>
                                                </li> : <li style={{
          padding: '0'
        }}>
                                                    <div className='flex gap-p05' style={{
            flex: 'auto',
            height: '29px'
          }}>
                                                        <input type='text' style={{
              borderRadius: '.5rem',
              borderWidth: '0',
              marginLeft: '.5rem'
            }} placeholder={`Friend's Email`} ref={inputFieldRef} />
                                                        <button onClick={handleSubmitFriendRequest} style={{
              width: '-webkit-fill-available',
              maxWidth: '85px',
              marginRight: '.5rem'
            }}>Invite</button>
                                                    </div>
                                                </li>}
                                </div> : null}
                    </React.Fragment> : null}
        </React.Fragment>;
};
export default Module;