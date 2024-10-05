const platform = 'Tycoon'
const support = 'admin@tycoon.systems'

const resolveConfig = (variables, props) => {
    return {
        platform: {
            pages: [
                {
                    url: '/test',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            // { 
                            //     type: 'div',
                            //     props: { className: 'title' },
                            //     children: [ 
                            //         { type: 'h1', props: { className: 'title', style: { marginTop: '0px' }, ...props }, children: ['Hello'] },
                            //     ] 
                            // },
                            // { type: 'p', props: { className: 'content', ...props }, children: ['Lorem ipsum'] },
                            // { type: 'SignIn', props: { className: 'content', ...variables, ...props }},
                            // { type: 'CreditCard', props: { className: 'content', ...variables, ...props }},
                            // { type: 'Streaming_Manager', props: { className: 'content', ...variables, ...props }},
                            // { type: 'Onboarding_SignIn_Username', props: { className: 'content', ...variables, ...props }},
                            // { type: 'Settings', props: { className: 'content', ...props }},
                            // { type: 'Video_Test_Live_Player', props: { className: 'content', ...variables, ...props }},
                            // { type: 'FetchHandler', props: { handlerName: 'my_handler_name', 
                            //     handlerArgs: [
                            //         {
                            //             productReq: [ '21c9bdbb-dd5c-41b1-ad72-f87ee99f3bf6', '313ed95f-8432-4e2b-80b5-cf666ae8f826', { description: 'dafoe' } ]
                            //         }
                            //     ],
                            // className: 'content', ...variables, ...props }},
                            {
                                type: 'CustomModule', props: { className: 'content', customModule: 'MarketingView', ...variables, ...props }
                            },
                            // {
                            //     type: 'Presentation', props: { module: 'MarketingSlider', groupLabel: 'Page Slider', ...variables, ...props }
                            // }
                        ]
                    }
                },
                {
                    url: '/',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            // {
                            //     type: 'SignIn', props: { className: 'SignInSafe', classNameAlways: 'SignInSafeAlwaysOn', ...variables, ...props }
                            // },
                            // {
                            //     type: 'Onboarding_SignIn_Username', props: { ...variables, ...props }
                            // },
                            {
                                type: 'Feature', props: { defaultSize: 'large', stagger: 2000, ...variables, ...props }
                            },
                            {
                                type: 'Presentation',
                                props: {
                                    module: 'BannerHello',
                                    img: 'https://d2p2h79srr15gg.cloudfront.net/product/c5d7995123a74b7eac7f146aed6811cc.jpeg',
                                    raw: true,
                                    href: '/w',
                                    lead: 'Welcome to Tycoon',
                                    text: 'Enjoy live experiences anytime. Join the Spectacle.',
                                    classes: {
                                        Text: 'BannerHello_Text'
                                    }
                                }
                            },
                            {
                                type: 'Presentation',
                                props: { 
                                    className: 'content',
                                    module: 'IndexHello', // IndexBgHello IndexHello
                                    leadClassName: 'firs_bold',
                                    timeSectionClassName: 'bluescreens',
                                    timeSimpleClassName: 'firs_bold',
                                    groupLabel: 'Upcoming',
                                    request: {
                                        handlerArgs: [
                                            { 
                                                productReq: [ { description: 'test', tags: 'yessir', type: 'virtual' }, { description: 'pseudo', type: 'virtual' } ]
                                            }
                                        ]
                                    },
                                    // items: [
                                    //     {
                                    //         rawBg: true, icon: 'img/IMG_4951.png', author: 'TYCOON TV', title: 'WHAT YOU GOT UNDER THERE? EPISODE 2', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906751686', leadBg: 'img/internal/engine.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true, streamId: 'streamid'
                                    //     },
                                    //     {
                                    //         rawBg: true, icon: 'img/IMG_4951.png', author: 'TYCOON TV', title: 'SHOW & TELL 2024', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1608906751686', leadBg: 'img/internal/apex_wheels.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true, streamId: 'streamid'
                                    //     },
                                    //     {
                                    //         rawBg: true, icon: '', author: 'TYCOON TV', title: 'DRAG DAILIES: INVITATIONAL', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906151686', leadBg: 'img/internal/drag2.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true
                                    //     },
                                    //     {
                                    //         rawBg: true, icon: '', author: 'TYCOON TV', title: 'RESPECT THE CAR: SAFE DRIVING IN HIGH PERFORMANCE VEHICLES', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906751686', leadBg: 'img/internal/987.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true, streamId: 'streamid'
                                    //     }
                                    // ],
                                    ...variables,
                                    ...props
                                }
                            },
                            {
                                type: 'Presentation', 
                                props: { 
                                    className: 'content',
                                    module: 'IndexBgHello', // IndexBgHello IndexHello
                                    leadClassName: 'firs_bold',
                                    timeSectionClassName: 'bluescreens',
                                    timeSimpleClassName: 'firs_bold',
                                    medium: true,
                                    request: {
                                        handlerArgs: [
                                            { 
                                                productReq: [ 'f7ffe9ef-aa59-4de4-b230-84622523f69a', '313ed95f-8432-4e2b-80b5-cf666ae8f826', { description: 'test' } ]
                                            }
                                        ]
                                    },
                                    // items: [
                                    //     {
                                    //         rawBg: true, icon: 'img/IMG_4951.png', author: 'TYCOON TV', title: 'HIGH OCTANE, NO LIMITS: CANADA RACING EVENTS LIVE DAY 6', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906751686', leadBg: 'img/internal/vlcsnap-2023-12-26-13h11m13s125-3.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true, streamId: 'streamid'
                                    //     },
                                    //     {
                                    //         rawBg: true, icon: 'img/IMG_4951.png', author: 'TYCOON TV', title: 'HIGH OCTANE, NO LIMITS: CANADA RACING EVENTS LIVE DAY 6', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1608906751686', leadBg: 'img/internal/vlcsnap-2023-12-26-13h11m13s125-3.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true, streamId: 'streamid'
                                    //     },
                                    //     {
                                    //         raw: true, rawBg: true, icon: '', author: 'TYCOON TV', title: 'HIGH OCTANE, NO LIMITS: CANADA RACING EVENTS LIVE DAY 6', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1706206151686', leadBg: 'img/internal/vlcsnap-2023-12-26-13h11m13s125-3.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true
                                    //     },
                                    //     {
                                    //         raw: true, rawBg: true, icon: '', author: 'TYCOON TV', title: 'HIGH OCTANE, NO LIMITS: CANADA RACING EVENTS LIVE DAY 6', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906751686', leadBg: 'img/internal/vlcsnap-2023-12-26-13h11m13s125-3.jpg', item: {
                                    //             action: 'add_to_cart',
                                    //             type: 'ticket',
                                    //             id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                    //             style: '327fd928-71a5-448b-8102-228284d8fe10',
                                    //             option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                    //         }, showSimpleDate: true, streamId: 'streamid'
                                    //     }
                                    // ],
                                    ...variables,
                                    ...props
                                }
                            },
                            {
                                type: 'Presentation', 
                                props: { 
                                    className: 'content',
                                    module: 'IndexHello', // IndexBgHello IndexHello
                                    leadClassName: 'firs_bold',
                                    timeSectionClassName: 'bluescreens',
                                    timeSimpleClassName: 'firs_bold',
                                    tall: true,
                                    // request: {
                                    //     handlerArgs: [
                                    //         { 
                                    //             productReq: [ 'f7ffe9ef-aa59-4de4-b230-84622523f69a', '313ed95f-8432-4e2b-80b5-cf666ae8f826', { description: '%dafoe%' } ]
                                    //         }
                                    //     ]
                                    // },
                                    items: [
                                        {
                                            rawBg: true, icon: 'img/IMG_4951.png', author: 'TYCOON TV', title: 'WHAT YOU GOT UNDER THERE? EPISODE 2', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906751686', leadBg: 'img/internal/engine.jpg', item: {
                                                action: 'add_to_cart',
                                                type: 'ticket',
                                                id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                                style: '327fd928-71a5-448b-8102-228284d8fe10',
                                                option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                            }, showSimpleDate: true, streamId: 'streamid'
                                        },
                                        {
                                            rawBg: true, icon: 'img/IMG_4951.png', author: 'TYCOON TV', title: 'SHOW & TELL 2024', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1608906751686', leadBg: 'img/internal/apex_wheels.jpg', item: {
                                                action: 'add_to_cart',
                                                type: 'ticket',
                                                id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                                style: '327fd928-71a5-448b-8102-228284d8fe10',
                                                option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                            }, showSimpleDate: true, streamId: 'streamid'
                                        },
                                        {
                                            raw: true, rawBg: true, icon: '', author: 'TYCOON TV', title: 'DRAG DAILIES: INVITATIONAL', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906151686', leadBg: 'img/internal/drag2.jpg', item: {
                                                action: 'add_to_cart',
                                                type: 'ticket',
                                                id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                                style: '327fd928-71a5-448b-8102-228284d8fe10',
                                                option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                            }, showSimpleDate: true
                                        },
                                        {
                                            raw: true, rawBg: true, icon: '', author: 'TYCOON TV', title: 'RESPECT THE CAR: SAFE DRIVING IN HIGH PERFORMANCE VEHICLES', description: 'Experience High Octane Racing from Official Canadian Racing Leagues Streamed Directly to your device throughout the Season. Get the best coverage of everything Drag Races, Drift Events, Time Attack and More. Secure your Ticket below for Day 6', cta: 'Get Tickets', ctaAfter: 'Tickets Secured', date: '1708906751686', leadBg: 'img/internal/987.jpg', item: {
                                                action: 'add_to_cart',
                                                type: 'ticket',
                                                id: '1e604397-7d1d-4669-b0a7-cc8c6576875f',
                                                style: '327fd928-71a5-448b-8102-228284d8fe10',
                                                option: 'a1ed4587-502d-4c5d-a0d2-3d8c02ed2436'
                                            }, showSimpleDate: true, streamId: 'streamid'
                                        }
                                    ],
                                    ...variables,
                                    ...props
                                }
                            },
                            // {
                            //     type: 'SignInPage', props: { className: 'content', backgroundUrl: 'img/internal/index_bg.png', OnboardCta: predefined.OnBoardCta, ctaTopVideos: {
                            //         image1: 'img/SharonRose_cta_lead_img.png'
                            //     }, imageSplash: null, ...variables, ...props }, children: [
                            //         {
                            //             type: 'Feature', props: { defaultSize: 'large', stagger: 2000, ...variables, ...props }
                            //         }
                            //         // {
                            //         //     type: 'SliderBasic', props: { items: [
                            //         //         { img: 'img/internal/test_hero.png', width: '-webkit-fill-available', cta: 'LIBIANCA FONJI', heading: 'BORN THIS WAY TOUR', description: 'OCTOBER 26th, 6:00 - 8:00PM', button: 'BUY NOW', buttonLink: '....', status: 'LIVE' },
                            //         //         { img: 'img/internal/test_hero.png', width: '-webkit-fill-available' },
                            //         //         { img: 'img/internal/test_hero.png', width: '-webkit-fill-available' }
                            //         //     ], ...variables, ...props }
                            //         // }
                            //     ]
                            // },
                            // {
                            //     type: 'CustomModule', props: { className: 'content', customModule: 'FeatureModule1', ...variables, ...props }
                            // }
                        ]
                    }
                },
                {
                    url: '/p',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            {
                                type: 'ProfilePage', props: { className: 'content', ...variables, ...props }
                            },
                        ]
                    }
                },
                {
                    url: '/e',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            {
                                type: 'EventPage', props: { className: 'content', ...variables, ...props }
                            },
                        ]
                    }
                },
                {
                    url: '/w',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            {
                                type: 'WatchPage', props: { className: 'content', ...variables, ...props }
                            },
                        ]
                    }
                },
                {
                    url: '/r',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            {
                                type: 'ReceiptPage', props: { className: 'content', ...variables, ...props }
                            },
                        ]
                    }
                },
                {
                    url: '/pr',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            {
                                type: 'ProductPage', props: { className: 'content', ...variables, ...props }
                            },
                        ]
                    }
                },
                {
                    url: '/settings',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            { type: 'Settings', props: { className: 'content', ...props }}
                        ]
                    }
                },
                {
                    url: '/terms',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            {
                                type: 'CustomModule', props: { className: 'content', customModule: 'Terms', ...variables, ...props }
                            },
                        ]
                    }
                },
                {
                    url: '/privacy',
                    data: {
                        type: 'div',
                        props: { className: 'lead-background' },
                        children: [
                            {
                                type: 'CustomModule', props: { className: 'content', customModule: 'Privacy', ...variables, ...props }
                            },
                        ]
                    }
                }
            ]
        },
        environment: {
            logging: {
                showLogs: true
            }
        }
    }
}

const predefined = {
    MenuConfig: {
        height: 55,
        padding: '10px 25px',
        menuOpenAfterCartInteraction: true
    },
    ChatConfig: {
        chatItemHeight: 17.5,
        menuThreadOffset: 2.8
    },
    PaymentConfig: {
        forceShowCc: true,
        keys: {
            paystack: 'pk_test_f80b9170238edc4114af56ba58ecae0a07c6cb13',
            stripe: 'pk_test_51IEf8CAu2LTYmPsqaLAWv0xdWnJVBU8HlsUnONWdDVsyNTjg8fij7HEVi7eA2PtLi92uhsz2f2iVafwQSh45TYlv0063hrV0Bi'
            // stripe: 'bad_test_key'
        },
        tax: {
            all: .13
        }
    },
    FeedbackConfig: {
        surveyData: {
            name: 'Feedback Menu',
            stages: {
                index: {
                    label: `What is your favorite thing about ${platform}?`,
                    input: {
                        type: "text",
                        placeholder: 'I like...'
                    },
                    confirm: { goto: 'least' },
                    bg: '#63ff7e',
                    color: 'magenta'
                },
                least: {
                    label: `What was an experience you disliked the most on the platform?`,
                    input: {
                        type: "text",
                        placeholder: 'I disliked...'
                    },
                    confirm: { goto: 'more' }
                },
                more: {
                    label: `What would you like to see more of on ${platform}?`,
                    input: {
                        type: "text",
                        placeholder: 'I want to see more of...'
                    },
                    confirm: { goto: "recommend" }
                },
                recommend: {
                    label: `Would you recommend ${platform} to your friends?`,
                    input: {
                        type: "select",
                        options: [
                            { label: "Yes", goto: "email" },
                            { label: "No", goto: "recommendno" }
                        ],
                    },
                },
                recommendno: {
                    label: `Why would you not recommend the platform?`,
                    input: {
                        type: "text",
                        placeholder: 'Because...'
                    },
                    confirm: { goto: 'improve' }
                },
                improve: {
                    label: "What can we do to best improve the platform?",
                    input: {
                        type: "text",
                        placeholder: 'I would like to see...'
                    },
                    confirm: { goto: 'email' }
                },
                email: {
                    label: 'What is your email?',
                    input: {
                        type: 'text',
                        default: 'Email'
                    },
                    confirm: { goto: 'end' }
                },
                end: {
                    submit: true,
                    label: 'Thankyou for filling out our form. We will get back to you very shortly.'
                }
            }
        },
        bugReportData: {
            name: 'Bug Menu',
            stages: {
                index: {
                    label: "Please describe the bug you encountered",
                    input: {
                        type: "text",
                        default: 'I had issues with...'
                    },
                    confirm: { goto: "end" }
                },
                end: {
                    submit: true,
                    label: `Thankyou for submitting the bug. We appreciate you spending time on ${platform}`
                }
            }
        }
    },
    SettingsConfig: {
        title: 'Settings',
        tabs: [
            {
                label: 'Profile',
                avatar: true,
                items: [
                    {
                        type: 'firstNameLastName',
                        className: 'my_custom_className' // Allows for className to be added to firstNameLastName container
                    },
                    {
                        type: 'username'
                    }
                ]
            },
            {
                label: 'Payment',
                items: [
                    {
                        type: 'handleCreditCard'
                    },
                    {
                        type: 'vendor'
                    }
                ]
            },
            {
                label: 'Orders',
                items: [
                    {
                        type: 'orders'
                    }
                ]
            },
            {
                label: 'Privacy',
                items: [
                    {
                        type: 'keepSubscriptionsPrivate', // Checkbox boolean
                    },
                    {
                        type: 'closeAccount', // Button
                    },
                ]
            },
            {
                label: 'Location',
                items: [
                    {
                        type: 'location', // label
                    }
                ]
            },
        ],
    },
    HelpIndex: [
        {
            question: 'How can I begin streaming?',
            answer: `In order to stream on ${platform} you must go to the profile page to request streaming access. Click here or go to the profile page and then open manager. Once you've opened the manager you will see whether or not you can stream. If you do not have access, request access to stream and we will review your request.`,
            a: 'p?a=openbeginstream',
            pinned: true
        },
        {
            question: `How do I purchase products on ${platform}?`,
            answer: 'To never miss out on offers and opportunities you can register a payment method so you never miss out on new products. Offers can appear on videos, in your notifications and other places.',
            a: 'settings?t=payment',
            pinned: true
        },
        {
            question: 'How do I get my ticket authorization?',
            answer: 'For virtual events you will automatically be authorized to watch the stream if you have already secured your ticket. If there are tickets left you can sometimes purchase tickets on the livestream page. View your acquired tickets in your personal settings.',
            a: 'settings?t=orders',
            pinned: true
        },
        {
            question: 'I just purchased a product. How do I my receipt and details?',
            answer: 'View all of your Orders pending or complete on the settings page. Click here to see them.',
            a: 'settings?t=orders'
        },
        {
            question: 'How do I create Products?',
            answer: 'You can create Products on the profile page as long as you have created a Shop. Users without Shops cannot create Products. Go to your profile page to create a Shop and once it is complete you will have the ability to create Virtual and Physical Products.',
            a: 'p'
        },
        {
            question: 'How do I choose the image that shows up for Product Views and Event Views?',
            answer: 'During Product creation you can select Lead Images and Feature Images. Lead Images will show up by default in nearly all views for your Product. A Feature Image will show up in "Event" views such as on the event page. The Lead Image should be either tall "portrait" or square in size. The Feature Image is most effective in a wide "landscape" size. This will ensure that your customers are shown the image most appropriate for the form factor.',
        },
        {
            question: 'How can I add a Lineup for my Event?',
            answer: 'Setting up a Lineup can be done during the Product creation or editing process. On the profile page create or edit your Product. When you have selected that the Ticket is for a Livestream you will be presented with the option to set a Lineup. You must Publish the product to be able to add images to the Lineup for each entity.',
            a: 'p',
            pinned: true
        },
        {
            question: 'How do I authorize Users to watch my Livestream?',
            answer: 'The most efficient way to authorize Users to watch Livestreams is to sell Tickets with Auth Keys. This is done by setting an Auth Key under the section where you select if the Product is for a Livestream. Once you have set that, any User that has purchased that Ticket will be able to watch any Livestream where you set the Auth Keys to the same values or dates.'
        },
        {
            question: 'How do I set different Prices in different currencies?',
            answer: 'As a Shop owner you can set different currencies for your Products. The platform will determine which currency to present to the User based on their location. Users will be given the closest price point to their location. For example, if you set a Product\'s USD price, Users in Canada will have that price presented to them in USD.',
        },
        {
            question: 'How can I set different Styles and Options for my Products?',
            answer: 'Every Product has atleast a default Style and Option. These are unnamed if you do not configure them and can be ignored. If you wish to have multiple Styles you can add a Style in the Product Creator. This corresponds best to different colors or form factors. If you wish to have multiple Options you can add an Option as well. This corresponds best to sizing in most cases.\n\nA Product can have multiple Styles and not the other way around. A Style can have multiple Options and not the other way around.',
        },
        {
            question: 'How do I set a countdown?',
            answer: 'The best way to set up a countdown for your event is by setting the Date for the event in the Product Creator. You must select if it is for a Livestream first. If that is true you will be presented wit hthe option to select the date for the event.',
        },
        {
            question: 'Can I set an infinite stock for a Product?',
            answer: 'Yes, of course! For any Product that has an infinite stock just click the infinity checkbox beside the Qty input during Product Creation.',
        },
        {
            question: 'I cannot send messages in the Chat. Why is that?',
            answer: `If you cannot send messages in the Chat it is likely that you have been banned by that Stream owner or one of their mods. Unfortunately you will not be able to participate in that Chat until they change their minds. If you feel that you have been unfairly banned or you suspect there is another issue you can contact support at ${support}.`
        }
    ]
}
/**
 * Valid pageDefault requests:
 * featureData: Fetches feature data for basic feature top bar
 * profile: Fetches profile based on query param u=username
 * shopProfile: Fetches shop data based on query param u=username
 * 
 * Based on the page name, define what required prefetch data you want to retrieve here. For example, page with const pageName = 'Index' will retrieve featureData with property below
 */
const pageDefaults = {
    index: [ 'featureData', 'profile' ]
}

export {
    predefined,
    pageDefaults,
    resolveConfig
}