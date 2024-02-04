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
* handlerArgs Obj[] - Sample [
    {
        "productReq": [ "21c9bdbb-dd5c-41b1-ad72-f87ee99f3bf6", "313ed95f-8432-4e2b-80b5-cf666ae8f826", { "description": "thriller" } ]
    },
    {
        "articleReq": [ "22fae9d8-b74a-4169-bbd6-2ea66fa61d19", { "tags": "dafoe" }]
    }
]