/**
 * Post method
 */

import { request } from "playwright";

const requestBody={
  "id": 909,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie-678",
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
console.log(await response.json())

// extract id and print