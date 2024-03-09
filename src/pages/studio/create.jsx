import React from 'react'
import StudioLayout from '@/components/Layouts/StudioLayout'
import CreateForm from '../../components/steps/createEventForm';

import { Survey } from '/modules/survey'
import apiReq from '/modules/utility/api/apiReq' // Import API for making DB Requests
import { defaultStyle } from '/modules/ecommerce/product/defaults'

const Create = () => { // Must pass props here
  // Handle Product Creation and Retrieval
  const [ currentStage, setCurrentStage ] = React.useState(null)
  const [ imgCache, setImgCache ] = React.useState(null)
  const [ pipelineDbItem, setPipelineDbItem ] = React.useState({})
  const [ pipelineObject, setPipelineObject ] = React.useState({})
  const [ imgFor, setImgFor ] = React.useState([])

  const doFunc = async () => {
    console.log('Send Items', imgCache, pipelineDbItem, pipelineObject, imgFor, props._loggedIn, props.apiUrl)
    const res = await apiReq('/product/createProduct', {
        apiUrl: props?.apiUrl,
        pipelineDbItem: pipelineDbItem,
        pipelineObject: pipelineObject,
        imgCache: imgCache,
        imgFor: imgFor,
        _loggedIn: props?._loggedIn // Requires Authentication
    })
    console.log('Res', res)
  }

  // Will retrieve products based on object
  const getProducts = async () => {
    const res = await apiReq('/product/getProducts', {
        apiUrl: props?.apiUrl,
        pagination: 0, // Paginate by page with 150 record limits
        extra: { // Specify exact matches on top level record fields
            owner: '70b5a93e-f9bc-4bd3-ad9f-a61d5aaf7a16' // Specify match for user id
        }
        // meta: { // Specify custom meta property fields for request
        //     address: 'Add'
        // }
    })
    console.log(res)
  }

  /**
     * If you return a string it will prevent user from proceeding. If you return null it is validated/not required
     * @param {*} e 
     * @returns 
     */
  const validationCheck = (stage, value) => {
    console.log(stage, value)
    // Use a condition on value or examine details of stage to determine condition. Return string to prevent progression until error is resolved
    if (value === '') {
        return `Empty Data ${stage?.label ? `for ${stage.label}` : ''}`
    }
    return null
  }

  const useSurvey = {
    name: 'Feedback Menu',
    stages: {
        index: {
            className: 'myClass',
            label: 'What is the name of your Event?',
            input: {
                type: "text",
                placeholder: 'I like...'
            },
            pipeline: [
                {
                    className: 'myClass',
                    label: 'Event Name',
                    input: {
                        type: 'text',
                        var: 'name',
                        validation: validationCheck
                    }
                },
                {
                    label: 'Event Description',
                    input: {
                        type: 'text',
                        var: 'description',
                        rows: 3,
                        validation: validationCheck
                    }
                }
            ],
            validation: validationCheck,
            confirm: { goto: 'eventLoc' }
        },
        eventLoc: {
            label: 'Where is the Event happening?',
            pipeline: [
                {
                    label: 'Venue Name',
                    input: {
                        type: 'text',
                        var: 'venue'
                    }
                },
                {
                    label: 'Address',
                    input: {
                        type: 'text',
                        var: 'address'
                    }
                },
                {
                    label: 'City',
                    input: {
                        type: 'text',
                        var: 'city'
                    }
                },
                {
                    label: 'State / Province',
                    input: {
                        type: 'text',
                        var: 'state'
                    }
                },
                {
                    label: 'Country',
                    input: {
                        type: 'text',
                        var: 'country'
                    }
                }
            ],
            confirm: { goto: 'eventTime' }
        },
        eventTime: {
            label: 'What Date and Time is the Event?',
            pipeline: [
                {
                    label: 'Date',
                    input: {
                        type: 'datetime-local',
                        var: 'eventDate'
                    }
                },
                {
                    label: 'Stream Start',
                    input: {
                        type: 'datetime-local',
                        var: 'streamStart'
                    }
                }
            ],
            confirm: { goto: 'lineup' }
        },
        lineup: {
            label: 'Who are the Artists',
            pipeline: [
                {
                    label: 'Artists or Band Name',
                    input: {
                        type: 'text',
                        var: 'bandName'
                    }
                },
                {
                    input: {
                        type: 'lineup',
                        var: 'lineup'
                    }
                }
            ],
            confirm: { goto: 'remaining' }
        },
        remaining: {
            pipeline: [
                {
                    label: 'Price',
                    input: {
                        type: 'price',
                        var: 'price',
                        method: 'singleStyle'
                    }
                },
                {
                    label: 'Quantity',
                    input: {
                        type: 'quantity',
                        var: 'quantity',
                        method: 'singleStyle'
                    }
                },
                {
                    label: 'Banner',
                    note: 'Add a Banner for your Event',
                    input: {
                        type: 'image',
                        var: 'featureImg'
                    },
                    height: '125px',
                    width: '250px'
                },
                {
                    className: 'myClass',
                    note: 'Add a Poster for your Event',
                    label: 'Poster',
                    input: {
                        type: 'image',
                        var: 'leadImg'
                    },
                    height: '125px',
                    width: '125px'
                }
            ],
            confirm: { label: 'Submit', goto: 'end' }
        },
        end: {
            func: doFunc
        }
    }
  }

  const style = defaultStyle()

  useSurvey.pipelineDbItemDefault = {
      id: uuidv4(),
      shop: props?.shop?.id ?? null,
      name: '',
      detailmeta: {
          productType: 'virtual',
          livestream: true,
          lineup: [],
          ticket: true // Add this to ensure Item is interpreted as ticket w date
      },
      styles: [
          style
      ],
      shipping: [],
      published: false,
      images: [],
      protype: {
          type: 'virtual',
          subscription: false
      },
      infinite: false,
      meta: {},
      files: {},
      new: true
  }

  // End Handle Product Creation
  return (
    <StudioLayout>
      <div className='md:mx-[8rem]'>
        // Relace the form here 
        <Survey { ...props} survey={useSurvey} setCurrentStage={setCurrentStage} setImgCache={setImgCache} setPipelineDbItem={setPipelineDbItem} setPipelineObject={setPipelineObject} setImgFor={setImgFor} />
        <CreateForm/>
      </div>
    </StudioLayout>
  );
};

export default Create;
