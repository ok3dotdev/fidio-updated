import React from 'react';
import { Feature } from '../../modules/search/feature';
import EventsGrid from './EventsGrid';
import { SliderBasic } from '../../modules/indexing/';
import FeaturedEvent from './FeaturedEvent';
import Upcoming from './Upcoming';
import MarqueeComponent from './Marquee';
import Footer from './Footer';
import { FetchHandler } from '../../modules/utility/fetch';
import { fireGlobalEvent } from '../../modules/utility/utility';

const items = [
  {
    img: '/img/internal/sharon.png',
    width: '100%',
    heading: 'Teriya Live in Concert',
    description: 'Nov 24 2023',
    buttonLink: '....',
    status: 'UPCOMING',
  },
  {
    img: '/img/internal/sharon3.png',
    width: '100%',
    heading: ' Lokay Live from Monaco Theatre',
    description: 'Oct 25 2023',
    buttonLink: '....',
    status: 'UPCOMING',
  },
  {
    img: '/img/internal/sharon5.png',
    width: '100%',
    heading: 'SummerTop Band Live from SoftRock Hall',
    description: 'Oct 31 2023',
    buttonLink: '....',
    status: 'UPCOMING',
  },
];

const HomeDash = (props) => {
  const receiveData = (data) => {
    console.log('data1111', data.data.fetchedData[0].productReq);
  };

  const handleFireGlobalEvent = React.useCallback(async (e) => {
    fireGlobalEvent(e, props._LocalEventEmitter);
  });

  return (
    <div className='w-full h-full pb-8 '>
      <Feature {...props} />
      <FeaturedEvent />
      <div className='relative'>
        <Upcoming />
      </div>
      <EventsGrid />
      <FetchHandler
        {...props}
        handlerName='my_handler'
        handlerArgs={[
          {
            productReq: [
              'b208c40c-6503-491a-a0ca-f1ce85d02d17',
              'bed6d9f6-7760-4d70-82fc-badd7d43635a',
            ],
          },
        ]}
        receiveData={receiveData}
      />
      {/* <MarqueeComponent /> */}
      {/* <Footer /> */}
      {/* <SliderBasic items={items} /> */}
      {/* <button
        onClick={handleFireGlobalEvent}
        item={'b208c40c-6503-491a-a0ca-f1ce85d02d17'}
        selectedstyle={'0441f2a2-4f6c-47b6-bb42-831708287de7'}
        currentoption={'70756244-2924-48b1-898f-eb7e4228b5cb'}
        action='add_to_cart'
      >
        Add To Cart
      </button> */}
    </div>
  );
};

export default HomeDash;

{
  /* <button onClick={handleFireGlobalEvent} item={props.product.id} selectedstyle={selectedStyle} currentoption={currentOption} action='buy'>Buy Now</button> */
}




// {
//     "productReq": [
//         {
//             "__typename": "Product",
//             "id": "b208c40c-6503-491a-a0ca-f1ce85d02d17",
//             "shop": "3cf7daaa-f81f-4d69-b9ba-deb574f7cff9",
//             "name": "Yesy",
//             "owner": "201198a1-4554-4cc5-8677-8f047967ca65",
//             "detailmeta": {
//                 "productType": "virtual",
//                 "ticket": true,
//                 "livestream": true,
//                 "livestreamDef": {
//                     "dates": [],
//                     "tags": [
//                         "testtag"
//                     ],
//                     "input": "testtag"
//                 },
//                 "eventDateDef": {
//                     "dates": [
//                         "2023-10-28T04:00:00.000Z"
//                     ],
//                     "input": "oct28-2023",
//                     "tags": []
//                 }
//             },
//             "styles": [
//                 {
//                     "price": 0,
//                     "sid": "0441f2a2-4f6c-47b6-bb42-831708287de7",
//                     "style": "",
//                     "option": [
//                         {
//                             "sid": "70756244-2924-48b1-898f-eb7e4228b5cb",
//                             "quantity": 1
//                         }
//                     ]
//                 }
//             ],
//             "shipping": [],
//             "published": true,
//             "created": "2023-10-16 00:16:37.795 +00:00",
//             "publish": "2023-10-16 00:16:37.675 +00:00",
//             "images": [
//                 {
//                     "orig": "2cd7b55d-9dcb-45d6-8af3-72df429b610e.png",
//                     "name": "product/a1a1d734c62b4224a9aa1ba14574e1af.png"
//                 }
//             ],
//             "protype": {
//                 "type": "virtual"
//             },
//             "infinite": false,
//             "meta": {},
//             "files": {}
//         },
//         {
//             "__typename": "Product",
//             "id": "bed6d9f6-7760-4d70-82fc-badd7d43635a",
//             "shop": "3cd25c67-ce17-4e82-92b2-6435ecc7d94d",
//             "name": "Test 1",
//             "owner": "ff53b78e-fcc5-4b85-a8c7-4708b29ce187",
//             "detailmeta": {
//                 "productType": "virtual",
//                 "ticket": true,
//                 "livestream": true,
//                 "livestreamDef": {
//                     "dates": [],
//                     "tags": [],
//                     "input": ""
//                 },
//                 "eventDateDef": {
//                     "dates": [],
//                     "input": ""
//                 }
//             },
//             "styles": [
//                 {
//                     "price": 0,
//                     "sid": "5029056c-ee0c-4afa-9421-5e83d31b4a3c",
//                     "style": "",
//                     "option": [
//                         {
//                             "sid": "178c3ce7-a84a-4ec4-b9ed-8f83ca56a2d6",
//                             "quantity": 100
//                         }
//                     ]
//                 }
//             ],
//             "shipping": [],
//             "published": true,
//             "created": "2023-10-15 23:47:42.540 +00:00",
//             "publish": "2023-10-15 23:47:42.438 +00:00",
//             "images": [
//                 {
//                     "orig": "ff304e38-17c7-4a38-ab8c-e6e3bc9b337e.jpeg",
//                     "name": "product/5c58ab9b36a848acb5fc2a3c453a0a21.jpeg"
//                 },
//                 {
//                     "orig": "14322913-0f42-4bed-9c64-fefa250f6f8f.jpeg",
//                     "name": "product/1579960792a34255a4c1814de9c02424.jpeg"
//                 },
//                 {
//                     "orig": "f863f926-3d35-41f8-abc7-2bb4c6c1f5bb.jpeg",
//                     "name": "product/8fdd3777de9242ef8704fe61c0bffbba.jpeg"
//                 }
//             ],
//             "protype": {
//                 "type": "virtual"
//             },
//             "infinite": false,
//             "meta": {},
//             "files": {}
//         }
//     ]
// }