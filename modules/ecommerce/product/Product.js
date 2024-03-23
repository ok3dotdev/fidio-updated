var _div, _div2, _Tooltip, _label, _label2, _div3, _div4, _div5, _div6, _div7, _div8, _div9, _Inventory, _div10, _div11;
import React from 'react';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { resolveDefaultStyle, resolveStyles, resolveRegionBasedPrice } from '../../utility/ecommerce';
import { fireGlobalEvent } from '../../utility/utility';
import { getFormattedDate } from '../../util';
import AllInclusive from '@mui/icons-material/AllInclusive';
import ConfirmationNumber from '@mui/icons-material/ConfirmationNumber';
import Inventory from '@mui/icons-material/Inventory';
import Stadium from '@mui/icons-material/Stadium';
import { Lineup, ProductImageManager } from '.';
import PIMStyles from './ProductImageManager.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { selectThisText } from '../../utility/utility/event';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [selectedStyle, setSelectedStyle] = React.useState({});
  const [currentOption, setCurrentOption] = React.useState(null);
  const [warning, setWarning] = React.useState(null);
  const optionSelect = React.useRef();
  const styleSelect = React.useRef();
  const isTicketRef = React.useRef();
  const isLivestreamRef = React.useRef();
  const [isSettingCurrency, setIsSettingCurrency] = React.useState(false);
  const descriptionInputRef = React.useRef();
  const currentCurrencyRef = React.useRef();
  const currency = '$';
  React.useEffect(() => {
    if (!componentDidMount) {
      props.setDefaultPriceHtml();
      setComponentDidMount(true);
    }
  }, [componentDidMount, setComponentDidMount, props.product]);
  resolveDefaultStyle(props.product, selectedStyle, setSelectedStyle, currentOption, setCurrentOption);
  const setSelectedStyleHandler = React.useCallback(e => {
    if (e && e.currentTarget) {
      if (e.currentTarget.value) {
        setSelectedStyle(e.currentTarget.value);
        const currentStyleObject = props.product.styles.find(m => m.sid === e.currentTarget.value);
        console.log(currentStyleObject);
        if (currentStyleObject && currentStyleObject.option && currentStyleObject.option[0] && currentStyleObject.option[0].sid) {
          setCurrentOption(currentStyleObject.option[0].sid);
        }
      }
    }
  });
  const changeCurrentOption = React.useCallback(e => {
    setCurrentOption(e.currentTarget.value);
  });
  const handleEdit = React.useCallback(e => {
    console.log(e, 'edit');
    if (e && e.currentTarget && e.currentTarget.getAttribute && e.currentTarget.getAttribute('modif')) {
      const modif = e.currentTarget.getAttribute('modif');
      const saveTarget = e.currentTarget;
      if (modif === 'edit' && props.handleEdit) {
        props.handleEdit(props.product);
        setTimeout(() => {
          props.nameRef.current.value = props?.product?.name;
          if (props.product.styles && props.product.styles[0]) {
            props.styleInput.current.value = props.product.styles[0].style;
            props.setEditingSelectedStyle(props.product.styles[0].sid);
            setTimeout(() => {
              console.log(props, props.product.styles[0].option && props.product.styles[0].option[0]);
              if (props.product.styles[0].option && props.product.styles[0].option[0]) {
                if (props.optionInput.current) {
                  props.optionInput.current.value = props.product.styles[0].option[0].option;
                }
                props.setEditingSelectedOption(props.product.styles[0].option[0].sid);
                props.quantityInput.current.value = props.product.styles[0].option[0].quantity;
                props.priceInput.current.value = props.product.styles[0].price;
                console.log(props.product.detailmeta);
                if (props.product.detailmeta) {
                  if (isTicketRef.current) {
                    isTicketRef.current.value = props.product.detailmeta.ticket;
                  }
                  if (isLivestreamRef.current) {
                    isLivestreamRef.current.value = props.product.detailmeta.livestream;
                  }
                }
                props.setEditingOptionsMeta(props.product.detailmeta);
              }
              const currentProduct = document.getElementById(props.product.id);
              if (currentProduct?.offsetTop && window?.scrollTo && props._isMobile) {
                window.scrollTo({
                  behavior: 'smooth',
                  top: currentProduct.offsetTop - 5
                });
              }
            }, 250);
          }
        }, 250);
      }
    }
  });
  const handleFireGlobalEvent = React.useCallback(async e => {
    fireGlobalEvent(e, props._LocalEventEmitter);
  });
  const handleSetIsSettingCurrency = React.useCallback(e => {
    if (isSettingCurrency) {
      setIsSettingCurrency(false);
      return false;
    }
    setIsSettingCurrency(true);
    return true;
  });
  const handleChangeCurrentCurrency = React.useCallback(e => {
    const v = props.changeCurrentCurrency(props.editing, e.currentTarget.value);
    if (v) {
      currentCurrencyRef.current.innerHTML = v;
      const f = Object.entries(props.regionsData).find(m => m[1].currency === v);
      if (f && f[1]) {
        props.setCurrentDefinePriceCurrency(f[1]);
        props.setDefaultPriceHtml(f[1]);
      }
    }
  });
  const handleUpdateProductDescription = React.useCallback(e => {
    const value = e.currentTarget.value;
    console.log(value, props.editing, props.editingOptionsMeta);
    if (props.editing) {
      const temp = {
        ...props.editingOptionsMeta
      };
      console.log(temp, props.editingOptionsMeta, props.editing);
      if (temp && props.setEditing) {
        temp.description = value;
        const newEditing = {
          ...props.editing
        };
        newEditing.detailmeta = temp;
        props.setEditing(newEditing);
        if (temp && props.setEditingOptionsMeta) {
          props.setEditingOptionsMeta(temp);
        }
      }
    }
  });
  const validStyleObject = selectedStyle && props.product && props.product.styles && props.product.styles.find(m => m.sid === selectedStyle) ? props.product.styles.find(m => m.sid === selectedStyle) : null;
  const validOptionObject = validStyleObject && validStyleObject.option ? currentOption ? validStyleObject.option.find(m => m.sid === currentOption) : validStyleObject.option[0] ? validStyleObject.option[0] : null : null;

  // console.log(props.product, props._loggedIn, currentOption, selectedStyle, props)
  const isAdmin = props.product && props.product.owner && props._loggedIn && props._loggedIn.identifier && props._loggedIn.identifier === props.product.owner;
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency, props.currentDefinePriceCurrency, props.priceInput, validStyleObject, props.editing);
  const currentPrice = React.useMemo(() => {
    return resolveRegionBasedPrice(props, validStyleObject);
  }, [props.product, validStyleObject, currency]);
  const isEditing = props?.editing?.id && props?.product?.id && props.editing.id === props.product.id;
  const useEditingOptions = isEditing && props?.editingOptionsMeta || !isEditing && props.product.detailmeta;
  return <div className={`${isEditing ? PIMStyles.currentlyEditingProductContainer : 'Product_col'} ${props.className}`} id={props.product && props.product.id ? props.product.id : ''} selectedstyle={validStyleObject?.sid ? validStyleObject.sid : ''} currentoption={validOptionObject?.sid ? validOptionObject.sid : ''}>
            {isEditing ? <div className={`${PIMStyles.currentEditingProductInnerContainer}`}>
                        <div className={`${PIMStyles.currentlyEditingProductContent}`}>
                            <div className={`${PIMStyles.productImgContainer} ${!isEditing ? 'Product_img_container' : ''} Product_img_container_large`}>
                                <ProductImageManager {...props} />
                            </div>
                            <div className={`${PIMStyles.productMetaContainer} Product_meta_container`}>
                                <div style={{
            height: `calc(100% - ${props._loggedIn ? '25' : '40'}px)`,
            maxHeight: '75vh',
            overflow: 'auto'
          }}>
                                    {/* <div className={`${PIMStyles.currentEditingProductCommandBar} ${PIMStyles.commandBar}`}>
                                        <div></div>
                                        <div>
                                            <button onClick={props.handleCancelProduct} modif='save'>{props.editing.new ? 'Abandon' : 'Cancel'}</button>
                                        </div>
                                     </div> */}
                                    <div>
                                        <div className='flex gap-p2'>
                                            <Tooltip title="Name of Product" placement='left'>
                                                    <label style={{
                    fontWeight: '600'
                  }}>Title: </label>
                                            </Tooltip>
                                            <input name='name' placeholder='Product Title' style={{
                  fontWeight: '600',
                  width: '100%'
                }} onChange={props.setCurrentName} ref={props.nameRef} modif='product_name' defaultValue={props?.editing?.name} />
                                        </div>
                                        {props.pageError.location && props.pageError.location === 'product_name' ? <div className='error'>{props.pageError.message}</div> : null}
                                    </div>
                                    <Tooltip title="Product Description" placement='left'>
                                        <TextareaAutosize className={`${PIMStyles.textArea}`} name='description' placeholder='Description' defaultValue={props?.editing?.detailmeta?.description} onChange={handleUpdateProductDescription} ref={descriptionInputRef} />
                                    </Tooltip>
                                    <div className='flex gap-p2' style={{
              alignItems: 'center'
            }}>
                                        <Tooltip title="Set the price for the currently selected Style" placement='left'>
                                            <div style={{
                  fontSize: '.8rem',
                  fontWeight: 600
                }}>{props.currentDefinePriceCurrency?.symbol ?? '$'}</div>
                                        </Tooltip>
                                        <input type='currency' style={{
                width: '100%'
              }} defaultValue='10.00' ref={props.priceInput} onChange={props.setCurrentPrice} />
                                        {validStyleObject && props.currentDefinePriceCurrency?.currency === 'USD' && validStyleObject?.price != props?.priceInput?.current?.value || props.currentDefinePriceCurrency?.currency !== 'USD' && (!validStyleObject.priceTable || validStyleObject.priceTable && !validStyleObject.priceTable[props.currentDefinePriceCurrency.currency] || props?.currentDefinePriceCurrency?.currency && validStyleObject.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, props.currentDefinePriceCurrency.currency) && validStyleObject.priceTable[props.currentDefinePriceCurrency.currency] != props.priceInput.current.value) ? <Tooltip title="The price displayed is currently not set for this product style. Click here to set it">
                                                    <button onClick={props.setCurrentPrice} value={props.priceInput?.current?.value} style={{
                  whiteSpace: 'nowrap',
                  lineHeight: '.5rem',
                  fontSize: '.75rem'
                }}>Set Price</button>
                                                </Tooltip> : null}
                                        <Tooltip title="You can set pricing in multiple currencies. Although the value you keep selected here will be the primary currency. Use the currency selector to choose a currency to begin setting prices in the respective currency. Countries that users reside in for which you have not set a currency will be presented the closest relevant currency you have defined a pricepoint in">
                                        <div className={`${PIMStyles.currencyLabel} ${isSettingCurrency ? `${PIMStyles.currencyLabelActive}` : null}`} style={{
                  lineHeight: '.5rem'
                }} onClick={handleSetIsSettingCurrency} ref={currentCurrencyRef}>{props.currentDefinePriceCurrency?.currency ?? isEditing?.meta?.currency ?? 'USD'}</div>
                                        </Tooltip>
                                        {isSettingCurrency ? <div className={`${PIMStyles.setCurrencyExternalContainer}`}>
                                                    <div className={`${PIMStyles.setCurrencyContainer}`}>
                                                        <select id={props.editing.id + '_setCurrency'} name={props.editing.id + '_setCurrency'} style={{
                    width: '100%'
                  }} onChange={handleChangeCurrentCurrency} ref={props.setCurrencySelect} defaultValue={props.currentDefinePriceCurrency?.currency ?? 'USD'}>
                                                            {props?.regionsData ? Object.entries(props.regionsData).map(m => <option className={`${PIMStyles.setCurrencyOption} ${m[1].currency !== 'USD' && validStyleObject?.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, m[1].currency) ? PIMStyles.currencyOptionUsed : null} ${m[1].currency === 'USD' ? PIMStyles.currencyOptionUsed : null}`} value={m[1].currency}>
                                                                            <div>{m[1].currency}</div>
                                                                            {_div || (_div = <div>&nbsp;</div>)}
                                                                            <div>{m[1].name}</div>
                                                                            {_div2 || (_div2 = <div>&nbsp;</div>)}
                                                                            <div>{m[1].symbol}</div>
                                                                        </option>) : null}
                                                        </select>
                                                    </div>
                                                </div> : null}
                                        <Tooltip title="Set the quantity for the currently selected Style & Option combo">
                                            <div style={{
                  fontSize: '.8rem',
                  fontWeight: 600,
                  display: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000 ? 'none' : 'block'
                }}>Qty</div>
                                        </Tooltip>
                                        <input type='number' style={{
                width: '100%',
                display: props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000 ? 'none' : 'block'
              }} defaultValue='10' ref={props.quantityInput} onChange={props.setCurrentQuantity} />
                                        {_Tooltip || (_Tooltip = <Tooltip title="Infinite stock">
                                            <AllInclusive />
                                        </Tooltip>)}
                                        <input type='checkbox' style={{
                margin: 0
              }} onChange={props.setInfinity} checked={props.selectedOption && props.selectedOption.quantity && props.selectedOption.quantity === 10000000} />
                                    </div>
                                    <div style={{
              border: '1px solid #484848',
              marginTop: '.125rem',
              marginBottom: '.25rem'
            }}></div>
                                    <div className='flex' style={{
              flexWrap: 'wrap',
              gap: '.05rem 0.2rem',
              marginBottom: '.125rem'
            }}>
                                        <Tooltip title="If your product has multiple styles, set them here. A style should be an alternate design or color for a single product that you want to track as single product. For example you might have white, black, grey for t-shirts as individual styles." placement='right'>
                                            <div className='flex gap-p2' style={{
                  alignItems: 'center'
                }}>
                                                <div style={{
                    fontSize: '.8rem',
                    fontWeight: 600
                  }}>Style</div>
                                                <div className='dropdown_input'>
                                                    <input type="text" ref={props.styleInput} onChange={props.setCurrentStyleName} />
                                                    <select id={props.editing.id + '_styles'} name={props.editing.id + '_styles'} style={{
                      width: '100%'
                    }} onChange={props.changeCurrentStyle}>{props.resolveStyles(props.editing).map((style, i) => {
                        return <option value={style.sid} className='style_option' key={i}>{style.style}</option>;
                      })}
                                                    </select>
                                                </div>
                                            </div>
                                        </Tooltip>
                                        {props.selectedStyle && props.selectedStyle.option.length > 0 && props.selectedStyle.option[0] && Object.hasOwnProperty.call(props.selectedStyle.option[0], 'option') ? <Tooltip title="If your product has options, set them here. An option should be a sizing or format choice that exists for all or most styles. For example you might have sizes XS, S, M, L, XL or OS as individual options per style." placement='right'>
                                                    <div className='flex gap-p2' style={{
                  alignItems: 'center'
                }}>
                                                        <div style={{
                    fontSize: '.8rem',
                    fontWeight: 600
                  }}>Option</div>
                                                        <div className='dropdown_input'>
                                                            <input type="text" ref={props.optionInput} onChange={props.setCurrentOptionName} />
                                                            <select id={props.editing.id + '_options'} name={props.editing.id + '_options'} style={{
                      width: '100%'
                    }} onChange={props.changeCurrentOption} ref={props.optionSelect}>{props.editing.styles.find(m => m.sid === props.editingSelectedStyle).option.map((option, i) => {
                        return <option value={option.sid} className='option_option' key={i}>{option.option}</option>;
                      })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </Tooltip> : null}
                                    </div>
                                    <div className='flex gap-p2 Product_admin_choice_container'>
                                        <button onClick={props.addStyle}>Add Style</button>
                                        <button onClick={props.addOption}>Add Option</button>
                                        <Tooltip title="Set the product type" placement='right'>
                                            <div className='flex gap-p2' style={{
                  fontSize: '.8rem',
                  alignItems: 'center'
                }}>
                                                <span className='flex'>
                                                    <input type="radio" id="virtual" name="fav_language" value="virtual" defaultChecked onChange={props.onProductTypeChange} />
                                                    {_label || (_label = <label for="virtual">Virtual</label>)}
                                                </span>
                                                <span className='flex'>
                                                    <input type="radio" id="physical" name="fav_language" value="physical" onChange={props.onProductTypeChange} />
                                                    {_label2 || (_label2 = <label for="physical">Physical</label>)}
                                                </span>
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div className='promptContainer' style={{
              alignItems: 'center',
              borderRadius: '.5rem',
              margin: '.25rem 0'
            }}>
                                        <div className='flex gap-p2'>
                                            <Tooltip title="Ticketed Products offer universally unique ids that are unique across the product being sold and can be stamped onto Ticket Images. Virtual Tickets are for Virtual Events. Physical Tickets serve Virtual Tickets for your own In Person Events." className='flex gap-p2' style={{
                  alignItems: 'center'
                }} placement='left'>
                                                <div style={{
                    fontSize: '.8rem'
                  }}>Is this a ticket?</div>
                                                <ConfirmationNumber style={{
                    width: '15px',
                    height: '15px'
                  }} />
                                            </Tooltip>
                                            <input type='checkbox' style={{
                  margin: 0
                }} value={props.product.detailmeta.ticket} defaultChecked={props.product.detailmeta.ticket} onChange={props.setOptionsMetaData} option='ticket' ref={isTicketRef} />
                                        </div>
                                        {useEditingOptions.ticket ? <div>
                                                    <Tooltip title="Please add dates your event is happening. Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates." className='flex gap-p2' style={{
                  alignItems: 'center'
                }} placement='right'>
                                                        <span style={{
                    fontSize: '.8rem',
                    fontWeight: '600',
                    whiteSpace: 'nowrap'
                  }}>Date for Event</span>
                                                        <input type='text' style={{
                    marginBottom: '.125rem',
                    width: '-webkit-fill-available'
                  }} placeholder='Date in MON-DD-YYYY-HH:MM format. If the ticket does not have an event date leave empty' onInput={props.setOptionsMetaData} option='eventDateDef' option2='input' defaultValue={props?.product?.detailmeta?.eventDateDef?.input} />
                                                    </Tooltip>
                                                    {props?.product?.detailmeta?.eventDateDef?.dates?.length > 0 ? <div className='tagContainer' style={{
                  marginTop: '.25rem',
                  marginBottom: '.25rem'
                }}>
                                                                {props.product.detailmeta.eventDateDef.dates.map(d => {
                    return d !== '' ? <div className='tagItem'>{d ? getFormattedDate(d, {
                        pretty: true
                      }) : ''}</div> : _div3 || (_div3 = <div></div>);
                  })}
                                                            </div> : _div4 || (_div4 = <div></div>)}
                                                </div> : null}
                                    </div>
                                    {props?.editingOptionsMeta?.productType === 'virtual' ? <div>
                                                <div className='promptContainer' style={{
                borderRadius: '.5rem',
                margin: '.25rem 0'
              }}>
                                                    <div className='flex gap-p2' style={{
                  alignItems: 'center',
                  height: '20px'
                }}>
                                                        <Tooltip title="You can use a date to authorize all users that purchase this ticket for access to your livestreams on that day. Or you can use a tag that you must include in the livestream tags field when you create it. Please use this if you want to put your livestream behind this paywalled purchase" className='flex gap-p2' style={{
                    alignItems: 'center'
                  }} placement='left'>
                                                            <div style={{
                      fontSize: '.8rem'
                    }}>Is this for a livestream?</div>
                                                            <Stadium style={{
                      width: '15px'
                    }} />
                                                        </Tooltip>
                                                        <input type='checkbox' style={{
                    margin: 0
                  }} value={props.product.detailmeta.livestream} defaultChecked={props.product.detailmeta.livestream} onChange={props.setOptionsMetaData} option='livestream' ref={isLivestreamRef} />
                                                    </div>
                                                    {useEditingOptions.livestream ? <div>
                                                                <Tooltip title="Enter dates or words for matching authorization. Enter dates in the following format MON-DD-YYYY-HH:MM. Time must be input in 24 H military time. Values that do not match dates will be parsed as Tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket" className='flex gap-p2' style={{
                    alignItems: 'center'
                  }} placement='right'>
                                                                    <span style={{
                      fontSize: '.8rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>Auth Keys | Tags</span>
                                                                    <input type='text' style={{
                      marginBottom: '.125rem',
                      width: '-webkit-fill-available'
                    }} placeholder='Date in DD/MM/YY format or a Tag' onInput={props.setOptionsMetaData} option='livestreamDef' option2='input' defaultValue={props?.product?.detailmeta?.livestreamDef?.input} />
                                                                </Tooltip>
                                                                <span className='flex gap-p2' style={{
                    marginBottom: '.25rem'
                  }}>
                                                                    {props?.product?.detailmeta?.livestreamDef?.dates.length > 0 ? <div className='tagContainer' style={{
                      marginTop: '.25rem'
                    }}>
                                                                                {props.product.detailmeta.livestreamDef.dates.map(d => {
                        return d !== '' ? <div className='tagItem'>{d ? getFormattedDate(d, {
                            pretty: true
                          }) : ''}</div> : _div5 || (_div5 = <div></div>);
                      })}
                                                                            </div> : _div6 || (_div6 = <div></div>)}
                                                                    {props?.product?.detailmeta?.livestreamDef?.tags.length > 0 ? <div className='tagContainer' style={{
                      marginTop: '.25rem'
                    }}>
                                                                                {props.product.detailmeta.livestreamDef.tags.map(d => {
                        return d !== '' ? <div className='tagItem'>{d}</div> : _div7 || (_div7 = <div></div>);
                      })}
                                                                            </div> : _div8 || (_div8 = <div></div>)}
                                                                </span>
                                                            </div> : null}
                                                    <Lineup {...props} product={props.product} setWarning={setWarning} appendFormData={props?.appendFormData} />
                                                </div>
                                                {warning && warning.message ? <div className={`${PIMStyles.warning}`}>
                                                            <div className={`${PIMStyles.warningItemContainer}`}>
                                                                <div className={`${PIMStyles.warningItem}`}>{warning.message}</div>
                                                            </div>
                                                        </div> : null}
                                            </div> : _div9 || (_div9 = <div></div>)}
                                    <div className='flex gap-p2 promptContainer' style={{
              alignItems: 'center',
              height: '20px',
              borderRadius: '.5rem',
              margin: '.25rem 0'
            }}>
                                        <Tooltip title="Allow for your customers to subscribe to your product. This is a guarantee by your company that you will continue to deliver your Product to any subscribed customers. Subscriptions will charge monthly by default." className='flex gap-p2' style={{
                alignItems: 'center'
              }} placement='left'>
                                            <div style={{
                  fontSize: '.8rem'
                }}>Is this a subscription?</div>
                                            <Inventory style={{
                  width: '15px'
                }} />
                                        </Tooltip>
                                        <input type='checkbox' style={{
                margin: 0
              }} value={props.product.detailmeta.subscription} defaultChecked={props.product.detailmeta.subscription} onChange={props.setOptionsMetaData} option='subscription' />
                                    </div>
                                    {props?.product?.published ? <div className='flex gap-p2'>
                                                <div className={`flex gap-p2 shareButton`} selectValue={`${props?.product?.id ? `${props.dev ? props.devAddress : props?.domainUrl}/pr?p=${props.product.id}` : null}`} onClick={selectThisText}>
                                                    {_Inventory || (_Inventory = <Inventory></Inventory>)}
                                                    {_div10 || (_div10 = <div>Share</div>)}
                                                </div>
                                                <Link href={`${props?.product?.id ? `${props.dev ? props.devAddress : props?.domainUrl}/pr?p=${props.product.id}` : null}`}>
                                                    {_div11 || (_div11 = <div className={`flex gap-p2 shareButton`}>
                                                        <Inventory></Inventory>
                                                        <div>View</div>
                                                    </div>)}
                                                </Link>
                                            </div> : null}
                                </div>
                                <div className='flex gap-p2 Product_admin_choice_container' style={{
            marginTop: '.125rem'
          }}>
                                    <button onClick={props.handlePublishProduct} modif='publish' existing='true'>Publish</button><button onClick={props.handlePublishProduct} modif='save' existing='true'>Save</button>
                                    {props.editing ? <button onClick={props.handleCancelProduct} modif='save'>{props.editing.new ? 'Abandon' : 'Cancel'}</button> : null}
                                </div>
                            </div>
                        </div>
                    </div> : <React.Fragment>
                        <div className={`${PIMStyles.productImgContainer} Product_img_container`} style={{
        position: 'relative'
      }}>
                            {isAdmin ? <Tooltip title='Edit Product' placement='left'>
                                        <button className={`${PIMStyles.editProductButton} ${props._isMobile ? `${PIMStyles.editProductButtonMobile}` : null}`} onClick={handleEdit} modif='edit' alt='edit'>
                                            <div className='edit material-icons' style={{
              fontSize: '.85rem'
            }}>edit</div>
                                        </button>
                                        </Tooltip> : null}
                            <ProductImageManager cdn={props.cdn} product={props.product} _loggedIn={props._loggedIn} domainKey={props.domainKey} apiUrl={props.apiUrl} setEditing={props.setEditing} setCombinedFeed={props.setCombinedFeed} />
                        </div>
                        <div className={`Product_meta_container`}>
                            <div>
                                <div className={`${props?.classes?.productName ?? ''}`}>{props.product.name}</div>
                            </div>
                            {props.product && props.product.styles && props.product.styles.length > 1 ? <div className='flex gap-p2' style={{
          alignItems: 'center'
        }}>
                                        <select id={props.product.id + '_styles'} name={props.product.id + '_styles'} style={{
            width: '100%'
          }} onChange={setSelectedStyleHandler} ref={styleSelect}>{resolveStyles(props.product).map((style, i) => {
              return <option value={style.sid} className='style_option' key={i}>{style.style}</option>;
            })}
                                        </select>
                                    </div> : null}
                            {validStyleObject && validStyleObject.option && validStyleObject.option[0] && validStyleObject.option[0].option // Only show if base option is named (non default option for tracking quantity)
        ? <div className='flex gap-p2' style={{
          alignItems: 'center'
        }}>
                                        <div className='dropdown_input'>
                                            <select id={props.product.id + '_options'} name={props.product.id + '_options'} style={{
              width: '100%'
            }} onChange={changeCurrentOption} ref={optionSelect}>{props.product.styles.find(m => m.sid === selectedStyle).option.map((option, i) => {
                return <option value={option.sid} className='option_option' key={i}>{option.option}</option>;
              })}
                                            </select>
                                        </div>
                                    </div> : null}
                            <div className='flex gap-p2' style={{
          alignItems: 'center'
        }}>
                                <div className='flex gap-p2' style={{
            margin: '.125rem 0'
          }}>
                                    <div style={{
              fontSize: '1rem',
              fontWeight: 600
            }}><span>{currentPrice?.symbol ?? null}</span><span>{currentPrice?.price ?? null}</span></div>
                                    <div className='Product_CurrencyLabel' style={{
              fontSize: '.8rem',
              fontWeight: 600,
              background: 'rgba(150, 150, 150, .5)',
              padding: '.075rem',
              borderRadius: '.25rem'
            }}>{currentPrice?.currency ?? 'USD'}</div>
                                </div>
                                <div style={{
            display: 'none',
            fontSize: '.8rem',
            fontWeight: 600
          }}>{validOptionObject && validOptionObject.quantity ? validOptionObject.quantity : ''}</div>
                            </div>
                            <div className={`flex gap-p2 Product_admin_choice_container wrap`} style={{
          marginTop: '.125rem'
        }}>
                                {/* <button onClick={handleFireGlobalEvent} item={props.product.id} selectedstyle={selectedStyle} currentoption={currentOption} action='buy'>Buy Now</button> */}
                                <button onClick={handleFireGlobalEvent} item={props.product.id} selectedstyle={selectedStyle} currentoption={currentOption} action='add_to_cart'>Add To Cart</button>
                                {props?.product?.detailmeta?.subscription ? <button onClick={handleFireGlobalEvent} item={props.product.id} selectedstyle={selectedStyle} currentoption={currentOption} action='add_to_cart_subscribe'>Subscribe</button> : null}
                            </div>
                        </div>
                    </React.Fragment>}       
        </div>;
};
export default Module;