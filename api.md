https://dbservices.tycoon.systems/api/ - PROD

## Articles
p/getarticle - Get single article from platform database
* domainKey String - Unique Platform Identification
* dborigin String - Platform
* p String - Article ID

## Fetch Handler
p/fetchhandler - Get array of many different types of records from the db
* domainKey String - Unique Platform Identification
* dborigin String - Platform
* handlerArgs Obj[] - Sample: [
    {
        "productReq": [ "21c9bdbb-dd5c-41b1-ad72-f87ee99f3bf6", "313ed95f-8432-4e2b-80b5-cf666ae8f826", { "description": "thriller" } ]
    },
    {
        "articleReq": [ "22fae9d8-b74a-4169-bbd6-2ea66fa61d19", { "tags": "dafoe" }]
    }
]

On productReq you can match individual record id's or use an object with the following keys:
description, tags

On articleReq you can match individual record id's or use an object with the following keys:
title, tags, groups

You can put match groups/strings in any order that you like in a single array for each request key object.

On productReq you can match individual record id's or use an object with the following keys:
description, tags

On articleReq you can match individual record id's or use an object with the following keys:
title, tags, groups

You can put match groups/strings in any order that you like in a single array for each request key object.

Note: Instead of making API requests against the p/fetchhandler route you can always just use the FetchHandler component at /utility/fetch below.
Doing this allows for you to avoid the risk of sending excessive requests to the backend and setting up state handlers to control fetch requests
<FetchHandler handlerArgs={[
    {
        productReq: [ '21c9bdbb-dd5c-41b1-ad72-f87ee99f3bf6', '313ed95f-8432-4e2b-80b5-cf666ae8f826', { description: 'dafoe' } ]
    }
]}>