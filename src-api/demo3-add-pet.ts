/**
 * Post method
 */

import { request } from "playwright";

const requestBody={
  "id": 688,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}

const apiRequestContext= await request.newContext(); 
const response=await apiRequestContext.post("https://petstore.swagger.io/v2/pet",
    {data:requestBody,headers:{'Content-Type':'application/json'}})

console.log(response.status())
const responseBody=await response.json()
console.log(responseBody)

// extract id and print

//delete