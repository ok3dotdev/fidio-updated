import React from 'react'
import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip'
import { resolveStyles } from '/modules/utility/ecommerce'
import { getFormattedDate } from '/modules/util'
import AllInclusive from '@mui/icons-material/AllInclusive'
import ConfirmationNumber from '@mui/icons-material/ConfirmationNumber'
import Inventory from '@mui/icons-material/Inventory'
import Stadium from '@mui/icons-material/Stadium'
import { Lineup, ProductImageManager } from '/modules/ecommerce/product'
import PIMStyles from '/modules/ecommerce/product/ProductImageManager.module.scss'
import TextareaAutosize from 'react-textarea-autosize'
import { selectThisText } from '/modules/utility/utility/event'

const Module = props => {
    const { isEditing, useEditingOptions, validStyleObject, validOptionObject, isAdmin, handleEdit, currentPrice, handleFireGlobalEvent, selectedStyle, selectedOption, currentOption, handleUpdateProductDescription, descriptionInputRef, isSettingCurrency, handleSetIsSettingCurrency, currentCurrencyRef, quantityInput, setCurrentQuantity, setInfinity, setCurrentStyleName, optionInput, setCurrentOptionName, changeCurrentOption, styleSelect, optionSelect, isTicketRef, isLivestreamRef, warning, setWarning, setSelectedStyleHandler, handleChangeCurrentCurrency, passTempImages, editingOptionsMeta, setOptionsMetaData, appendFormData, currentLineupEditing, setCurrentLineupEditing, setCurrentName, nameRef, currentDefinePriceCurrency, setCurrentPrice, styleInput, setCombinedFeed, setEditing, handleCancelProduct, handlePublishProduct, onProductTypeChange, addStyle, addOption } = props
    const editingNew = props?.product?.new
    return (
        <React.Fragment>
            {
                isEditing
                    ? <div className={`${PIMStyles.currentEditingProductInnerContainer}`}>
                        <div className={`${PIMStyles.currentlyEditingProductContent}`}>
                            <div className={`${PIMStyles.productImgContainer} ${!isEditing ? 'Product_img_container' : ''} Product_img_container_large`}>
                                <ProductImageManager {...props} editing={props.product} passTempImages={editingNew && passTempImages ? passTempImages : null} />
                            </div>
                            <div className={`${PIMStyles.productMetaContainer} Product_meta_container`}>
                                <div className={`${PIMStyles.productMetaInternalContainer}`} style={{ height: `calc(100% - ${props._loggedIn ? '25' : '40'}px)` }}>
                                    <div>
                                        <div className='flex gap-p2'>
                                            <Tooltip title="Name of Product" placement='left'>
                                                    <label style={{ fontWeight: '600' }}>Title </label>
                                            </Tooltip>
                                            <input name='name' placeholder='Product Title' style={{ fontWeight: '600', width: '100%' }} onChange={setCurrentName} ref={nameRef} modif='product_name' defaultValue={props?.editing?.name} />
                                        </div>
                                        {
                                            props.pageError.location && props.pageError.location === 'product_name'
                                                ? <div className='error'>{props.pageError.message}</div>
                                                : null
                                        }
                                    </div>
                                    <Tooltip title="Product Description" placement='left'>
                                        <TextareaAutosize className={`${PIMStyles.textArea}`} name='description' placeholder='Description' defaultValue={props?.editing?.detailmeta?.description} onChange={handleUpdateProductDescription} ref={descriptionInputRef} />
                                    </Tooltip>
                                    <div className='flex gap-p2' style={{ alignItems: 'center'}}>
                                        <Tooltip title="Set the price for the currently selected Style" placement='left'>
                                            <div style={{ fontSize: '.8rem', fontWeight: 600 }}>{currentDefinePriceCurrency?.symbol ?? '$'}</div>
                                        </Tooltip>
                                        <input type='currency' style={{ width: '100%' }} defaultValue='10.00' ref={props.priceInput} onChange={setCurrentPrice} />
                                        {
                                            validStyleObject && (currentDefinePriceCurrency?.currency === 'USD' && validStyleObject?.price != props?.priceInput?.current?.value)
                                                || (currentDefinePriceCurrency?.currency !== 'USD'
                                                    && (!validStyleObject.priceTable || (validStyleObject.priceTable && !validStyleObject.priceTable[currentDefinePriceCurrency.currency]) || (props?.currentDefinePriceCurrency?.currency && validStyleObject.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, currentDefinePriceCurrency.currency) && validStyleObject.priceTable[currentDefinePriceCurrency.currency] != props.priceInput.current.value)))
                                                ? <Tooltip title="The price displayed is currently not set for this product style. Click here to set it">
                                                    <button onClick={setCurrentPrice} value={props.priceInput?.current?.value} style={{ whiteSpace: 'nowrap', lineHeight: '.5rem', fontSize: '.75rem' }}>Set Price</button>
                                                </Tooltip>
                                                : null
                                        }
                                        <Tooltip title="You can set pricing in multiple currencies. Although the value you keep selected here will be the primary currency. Use the currency selector to choose a currency to begin setting prices in the respective currency. Countries that users reside in for which you have not set a currency will be presented the closest relevant currency you have defined a pricepoint in">
                                        <div className={`${PIMStyles.currencyLabel} ${isSettingCurrency ? `${PIMStyles.currencyLabelActive}` : null}`} style={{ lineHeight: '.5rem' }} onClick={handleSetIsSettingCurrency} ref={currentCurrencyRef}>{currentDefinePriceCurrency?.currency ?? isEditing?.meta?.currency ?? 'USD'}</div>
                                        </Tooltip>
                                        {
                                            isSettingCurrency
                                                ? <div className={`${PIMStyles.setCurrencyExternalContainer}`}>
                                                    <div className={`${PIMStyles.setCurrencyContainer}`}>
                                                        <select id={props.editing.id + '_setCurrency'} name={props.editing.id + '_setCurrency'} style={{ width: '100%' }} onChange={handleChangeCurrentCurrency} ref={setCurrencySelect} defaultValue={currentDefinePriceCurrency?.currency ?? 'USD'}>
                                                            {
                                                                props?.regionsData
                                                                    ? Object.entries(props.regionsData).map(m => (
                                                                        <option className={`${PIMStyles.setCurrencyOption} ${m[1].currency !== 'USD' && validStyleObject?.priceTable && Object.prototype.hasOwnProperty.call(validStyleObject.priceTable, m[1].currency) ? PIMStyles.currencyOptionUsed : null} ${m[1].currency === 'USD' ? PIMStyles.currencyOptionUsed : null}`} value={m[1].currency}>
                                                                            <div>{m[1].currency}</div>
                                                                            <div>&nbsp;</div>
                                                                            <div>{m[1].name}</div>
                                                                            <div>&nbsp;</div>
                                                                            <div>{m[1].symbol}</div>
                                                                        </option>
                                                                    ))
                                                                    : null
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                        <Tooltip title="Set the quantity for the currently selected Style & Option combo">
                                            <div style={{ fontSize: '.8rem', fontWeight: 600, display: selectedOption?.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block' }}>Qty</div>
                                        </Tooltip>
                                        <input type='number' style={{ width: '100%', display: selectedOption?.quantity && selectedOption.quantity === 10000000 ? 'none' : 'block' }} defaultValue='10' ref={quantityInput} onChange={setCurrentQuantity} />
                                        <Tooltip title="Infinite stock">
                                            <AllInclusive />
                                        </Tooltip>
                                        <input type='checkbox' style={{ margin: 0 }} onChange={setInfinity} checked={selectedOption?.quantity && selectedOption.quantity === 10000000} />
                                    </div>
                                    <div style={{ border: '1px solid #484848', marginTop: '.125rem', marginBottom: '.25rem' }}></div>
                                    <div className='flex' style={{ flexWrap: 'wrap', gap: '.05rem 0.2rem', marginBottom: '.125rem' }}>
                                        <Tooltip title="If your product has multiple styles, set them here. A style should be an alternate design or color for a single product that you want to track as single product. For example you might have white, black, grey for t-shirts as individual styles." placement='right'>
                                            <div className='flex gap-p2' style={{ alignItems: 'center' }}>
                                                <div style={{ fontSize: '.8rem', fontWeight: 600 }}>Style</div>
                                                <div className='dropdown_input'>
                                                    <input type="text" ref={styleInput} onChange={setCurrentStyleName} />
                                                    <select id={props.editing.id + '_styles'} name={props.editing.id + '_styles'} style={{ width: '100%' }} onChange={props.changeCurrentStyle}>{props.resolveStyles(props.editing).map((style, i) => {
                                                        return (<option value={style.sid} className={`style_option ${props?.editingSelectedStyle === style.sid ? 'option_currently_selected' : ''}`} key={i}>{style.style}</option>)
                                                    })}
                                                    </select>
                                                </div>
                                            </div>
                                        </Tooltip>
                                        {
                                            validStyleObject?.option?.length > 0 && validStyleObject.option[0] && Object.hasOwnProperty.call(validStyleObject.option[0], 'option')
                                                ? <Tooltip title="If your product has options, set them here. An option should be a sizing or format choice that exists for all or most styles. For example you might have sizes XS, S, M, L, XL or OS as individual options per style." placement='right'>
                                                    <div className='flex gap-p2' style={{ alignItems: 'center'}}>
                                                        <div style={{ fontSize: '.8rem', fontWeight: 600 }}>Option</div>
                                                        <div className='dropdown_input'>
                                                            <input type="text" ref={optionInput} onChange={setCurrentOptionName} />
                                                            <select id={props.editing.id + '_options'} name={props.editing.id + '_options'} style={{ width: '100%' }} onChange={changeCurrentOption} ref={optionSelect}>{props.editing.styles.find(m => m.sid === props.editingSelectedStyle)?.option.map((option, i) => {
                                                                return (<option value={option.sid} className={`option_option ${props?.editingSelectedOption === option.sid ? 'option_currently_selected' : ''}`} key={i}>{option?.option ?? ''}</option>)
                                                            })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </Tooltip>
                                                : null
                                        }
                                    </div>
                                    <div className='flex gap-p2 Product_admin_choice_container'>
                                        <button onClick={addStyle}>Add Style</button>
                                        <button onClick={addOption}>Add Option</button>
                                        <Tooltip title="Set the product type" placement='right'>
                                            <div className='flex gap-p2' style={{ fontSize: '.8rem', alignItems: 'center' }}>
                                                <span className='flex'>
                                                    <input type="radio" id="virtual" name="fav_language" value="virtual" defaultChecked onChange={onProductTypeChange} />
                                                    <label for="virtual">Virtual</label>
                                                </span>
                                                <span className='flex'>
                                                    <input type="radio" id="physical" name="fav_language" value="physical" onChange={onProductTypeChange} />
                                                    <label for="physical">Physical</label>
                                                </span>
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div className='promptContainer' style={{ alignItems: 'center', borderRadius: '.5rem', margin: '.25rem 0' }}>
                                        <div className='flex gap-p2'>
                                            <Tooltip title="Ticketed Products offer universally unique ids that are unique across the product being sold and can be stamped onto Ticket Images. Virtual Tickets are for Virtual Events. Physical Tickets serve Virtual Tickets for your own In Person Events." className='flex gap-p2' style={{ alignItems: 'center' }} placement='left'>
                                                <div style={{ fontSize: '.8rem' }}>Is this a ticket?</div>
                                                <ConfirmationNumber style={{ width: '15px', height: '15px' }} />
                                            </Tooltip>
                                            <input type='checkbox' style={{ margin: 0 }} value={props.product.detailmeta.ticket} defaultChecked={props.product.detailmeta.ticket} onChange={setOptionsMetaData} option='ticket' ref={isTicketRef} />
                                        </div>
                                        {
                                            useEditingOptions.ticket
                                                ? <div>
                                                    <Tooltip title="Please add dates your event is happening. Enter dates in the following format MON-DD-YYYY-HH:MM or they will not be parsed as dates." className='flex gap-p2' style={{ alignItems: 'center' }} placement='right'>
                                                        <span style={{ fontSize: '.8rem', fontWeight: '600', whiteSpace: 'nowrap' }}>Date for Event</span>
                                                        <input type='text' style={{ marginBottom: '.125rem', width: '-webkit-fill-available' }} placeholder='Date in MON-DD-YYYY-HH:MM format. If the ticket does not have an event date leave empty' onInput={setOptionsMetaData} option='eventDateDef' option2='input' defaultValue={props?.product?.detailmeta?.eventDateDef?.input} />
                                                    </Tooltip>
                                                    {
                                                        props?.product?.detailmeta?.eventDateDef?.dates?.length > 0 ?
                                                            <div className='tagContainer' style={{ marginTop: '.25rem', marginBottom :'.25rem' }}>
                                                                {
                                                                    props.product.detailmeta.eventDateDef.dates.map(d => {
                                                                        return (d !== '' ? <div className='tagItem'>{d ? getFormattedDate(d, { pretty: true }) : ''}</div> : <div></div>)
                                                                    })
                                                                }
                                                            </div>
                                                            : (<div></div>)
                                                    }
                                                </div>
                                                : null
                                        }
                                    </div>
                                    {
                                        editingOptionsMeta?.productType === 'virtual'
                                            ? <div>
                                                <div className='promptContainer' style={{ borderRadius: '.5rem', margin: '.25rem 0' }}>
                                                    <div className='flex gap-p2' style={{ alignItems: 'center', height: '20px' }}>
                                                        <Tooltip title="You can use a date to authorize all users that purchase this ticket for access to your livestreams on that day. Or you can use a tag that you must include in the livestream tags field when you create it. Please use this if you want to put your livestream behind this paywalled purchase" className='flex gap-p2' style={{ alignItems: 'center' }} placement='left'>
                                                            <div style={{ fontSize: '.8rem' }}>Is this for a livestream?</div>
                                                            <Stadium style={{ width: '15px' }} />
                                                        </Tooltip>
                                                        <input type='checkbox' style={{ margin: 0 }} value={props.product.detailmeta.livestream} defaultChecked={props.product.detailmeta.livestream} onChange={setOptionsMetaData} option='livestream' ref={isLivestreamRef} />
                                                    </div>
                                                    {
                                                        useEditingOptions.livestream
                                                            ? <div>
                                                                <Tooltip title="Enter dates or words for matching authorization. Enter dates in the following format MON-DD-YYYY-HH:MM. Time must be input in 24 H military time. Values that do not match dates will be parsed as Tags that can be added to livestreams. Any matches will authorize viewership of the stream for purchases of this ticket" className='flex gap-p2' style={{ alignItems: 'center' }} placement='right'>
                                                                    <span style={{ fontSize: '.8rem', fontWeight: '600', whiteSpace: 'nowrap' }}>Tags</span>
                                                                    <input type='text' style={{ marginBottom: '.125rem', width: '-webkit-fill-available' }} placeholder='Date in DD/MM/YY format or a Tag' onInput={setOptionsMetaData} option='livestreamDef' option2='input' defaultValue={props?.product?.detailmeta?.livestreamDef?.input} />
                                                                </Tooltip>
                                                                <span className='flex gap-p2' style={{ marginBottom: '.25rem' }}>
                                                                    {
                                                                        props?.product?.detailmeta?.livestreamDef?.dates.length > 0 ?
                                                                            <div className='tagContainer' style={{ marginTop: '.25rem' }}>
                                                                                {
                                                                                    props.product.detailmeta.livestreamDef.dates.map(d => {
                                                                                        return (d !== '' ? <div className='tagItem'>{d ? getFormattedDate(d, { pretty: true }) : ''}</div> : <div></div>)
                                                                                    })
                                                                                }
                                                                            </div>
                                                                            : (<div></div>)
                                                                    }
                                                                    {
                                                                        props?.product?.detailmeta?.livestreamDef?.tags.length > 0 ?
                                                                            <div className='tagContainer' style={{ marginTop: '.25rem' }}>
                                                                                {
                                                                                    props.product.detailmeta.livestreamDef.tags.map(d => {
                                                                                        return (d !== '' ? <div className='tagItem'>{d}</div> : <div></div>)
                                                                                    })
                                                                                }
                                                                            </div>
                                                                            : (<div></div>)
                                                                    }
                                                                </span>
                                                            </div>
                                                            : null
                                                    }
                                                    {
                                                        editingNew
                                                            ? <Lineup { ...props } product={props.product} editing={props.product} editingOptionsMeta={editingOptionsMeta} setOptionsMetaData={setOptionsMetaData} currentLineupEditing={currentLineupEditing} setCurrentLineupEditing={setCurrentLineupEditing} appendFormData={appendFormData} />
                                                            : <Lineup { ...props } product={props.product} setWarning={setWarning} appendFormData={appendFormData} />
                                                    }
                                                </div>
                                                {
                                                    warning && warning.message
                                                        ? <div className={`${PIMStyles.warning}`}>
                                                            <div className={`${PIMStyles.warningItemContainer}`}>
                                                                <div className={`${PIMStyles.warningItem}`}>{warning.message}</div>
                                                            </div>
                                                        </div>
                                                        : null
                                                }
                                            </div>
                                            : <div></div>
                                    }
                                    <div className='flex gap-p2 promptContainer' style={{ alignItems: 'center', height: '20px', borderRadius: '.5rem', margin: '.25rem 0' }}>
                                        <Tooltip title="Allow for your customers to subscribe to your product. This is a guarantee by your company that you will continue to deliver your Product to any subscribed customers. Subscriptions will charge monthly by default." className='flex gap-p2' style={{ alignItems: 'center' }} placement='left'>
                                            <div style={{ fontSize: '.8rem' }}>Is this a subscription?</div>
                                            <Inventory style={{ width: '15px' }} />
                                        </Tooltip>
                                        <input type='checkbox' style={{ margin: 0 }} value={props.product.detailmeta.subscription} defaultChecked={props.product.detailmeta.subscription} onChange={setOptionsMetaData} option='subscription' />
                                    </div>
                                    {
                                        props?.product?.published
                                            ? <div className='flex gap-p2'>
                                                <div className={`flex gap-p2 shareButton`} selectValue={`${props?.product?.id ? `${props.dev ? props.devAddress : `https://${props?.domainUrl}`}/${props?.product?.detailmeta?.ticket ? 'e' : 'pr'}?p=${props.product.id}` : null}`} onClick={selectThisText}>
                                                    <Inventory></Inventory>
                                                    <div>Share</div>
                                                </div>
                                                <Link href={`${props?.product?.id ? `${props.dev ? props.devAddress : `https://${props?.domainUrl}`}/${props?.product?.detailmeta?.ticket ? 'e' : 'pr'}?p=${props.product.id}` : null}`}>
                                                    <div className={`flex gap-p2 shareButton`} >
                                                        <Inventory></Inventory>
                                                        <div>View</div>
                                                    </div>
                                                </Link>
                                            </div>
                                            : null
                                    }
                                </div>
                                <div className='flex gap-p2 Product_admin_choice_container' style={{ marginTop: '.125rem' }}>
                                    <button onClick={handlePublishProduct} modif='publish' existing={editingNew ? null : 'true'}>Publish</button><button onClick={handlePublishProduct} modif='save' existing={editingNew ? null : 'true'}>Save</button>
                                    {
                                        props.editing ?
                                            <button onClick={handleCancelProduct} modif='save'>{editingNew ? 'Abandon' : 'Cancel'}</button>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    : <React.Fragment>
                        <div className={`${PIMStyles.productImgContainer} Product_img_container`} style={{ position: 'relative' }}>
                            {
                                isAdmin 
                                    ? <Tooltip title='Edit Product' placement='left'>
                                        <button className={`${PIMStyles.editProductButton} ${props._isMobile ? `${PIMStyles.editProductButtonMobile}` : null}`} onClick={handleEdit} modif='edit' alt='edit'>
                                            <div className='edit material-icons' style={{ fontSize: '.85rem' }}>edit</div>
                                        </button>
                                        </Tooltip>
                                    : null
                            }
                            <ProductImageManager cdn={props.cdn} product={props.product} _loggedIn={props._loggedIn} domainKey={props.domainKey} apiUrl={props.apiUrl} setEditing={setEditing} setCombinedFeed={setCombinedFeed} />
                        </div>
                        <div className={`Product_meta_container`}>
                            <div>
                                <Link href={`${props?.product?.id ? `${props.dev ? props.devAddress : `https://${props?.domainUrl}`}/${props?.product?.detailmeta?.ticket ? 'e' : 'pr'}?p=${props.product.id}` : null}`}>
                                    <div className={`${props?.classes?.productName ?? ''}`}>{props.product.name}</div>
                                </Link>
                            </div>
                            {
                                props?.product?.styles && props.product.styles.length > 1
                                    ? <div className='flex gap-p2' style={{ alignItems: 'center' }}>
                                        <div className='dropdown_input' style={{ width: '100%' }}>
                                            <select id={props.product.id + '_styles'} name={props.product.id + '_styles'} style={{ width: '100%' }} onChange={setSelectedStyleHandler} ref={styleSelect}>{resolveStyles(props.product).map((style, i) => {
                                                return (<option value={style.sid} className={`style_option ${selectedStyle === style.sid ? 'option_currently_selected' : ''}`} key={i}>{style.style}</option>)
                                            })}
                                            </select>
                                        </div>
                                    </div>
                                    : null
                            }
                            {
                                validStyleObject && validStyleObject.option && validStyleObject.option[0] && validStyleObject.option[0].option // Only show if base option is named (non default option for tracking quantity)
                                    ? <div className='flex gap-p2' style={{ alignItems: 'center'}}>
                                        <div className='dropdown_input' style={{ width: '100%' }}>
                                            <select id={props.product.id + '_options'} name={props.product.id + '_options'} style={{ width: '100%' }} onChange={changeCurrentOption} ref={optionSelect}>{props.product.styles.find(m => m.sid === selectedStyle).option.map((option, i) => {
                                                return (<option value={option.sid} className='option_option' key={i}>{option.option}</option>)
                                            })}
                                            </select>
                                        </div>
                                    </div>
                                    : null
                            }
                            <div className='flex gap-p2' style={{ alignItems: 'center'}}>
                                <div className='flex gap-p2' style={{ margin: '.125rem 0' }}>
                                    <div style={{ fontSize: '1rem', fontWeight: 600 }}><span>{currentPrice?.symbol ?? null}</span><span>{currentPrice?.price ?? null}</span></div>
                                    <div className='Product_CurrencyLabel' style={{ fontSize: '.8rem', fontWeight: 600, background: 'rgba(150, 150, 150, .5)', padding: '.075rem', borderRadius: '.25rem' }}>{currentPrice?.currency ?? 'USD'}</div>
                                </div>
                                <div style={{ display: 'none', fontSize: '.8rem', fontWeight: 600 }}>{validOptionObject && validOptionObject.quantity ? validOptionObject.quantity : ''}</div>
                            </div>
                            <div className={`flex gap-p2 Product_admin_choice_container wrap`} style={{ marginTop: '.125rem' }}>
                                <button onClick={handleFireGlobalEvent} item={props.product.id} selectedstyle={selectedStyle} currentoption={currentOption} action='add_to_cart'>Add To Cart</button>
                                {
                                    props?.product?.detailmeta?.subscription
                                        ? <button onClick={handleFireGlobalEvent} item={props.product.id} selectedstyle={selectedStyle} currentoption={currentOption} action='add_to_cart_subscribe'>Subscribe</button>
                                        : null
                                }
                            </div>
                        </div>
                    </React.Fragment>
            }       
        </React.Fragment>
    )
}

export default Module