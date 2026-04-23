/**
 * Get method
 * Example for query parameter
 */

import { request } from "playwright";


const apiRequestContext= await request.newContext(); 

const response=await apiRequestContext.get("https://petstore.swagger.io/v2/pet/findByStatus?status=sold")

console.log(response.status())

const responseBody=await response.json()

console.log(responseBody)
console.log(responseBody.length)

// first pet details. just print the status of first pet 
console.log(responseBody[0].status)

// for loop
for(let i=0;i<responseBody.length;i++)
{
    console.log(responseBody[i].id)
}

// for each 
for(let pet of responseBody)
{
    console.log(pet)
}