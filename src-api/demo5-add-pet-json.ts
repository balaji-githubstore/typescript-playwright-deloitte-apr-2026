/**
 * Post method
 */


import { request } from "playwright";
import assert from "node:assert";
import fs from "node:fs";

const requestBody=JSON.parse(
    fs.readFileSync('test-data/new-pet.json','utf-8')
)
console.log(requestBody.id)

const apiRequestContext= await request.newContext(); 
const response=await apiRequestContext.post("https://petstore.swagger.io/v2/pet",
    {data:requestBody,headers:{'Content-Type':'application/json'}})

console.log(response.status())
const responseBody=await response.json()
console.log(responseBody)

assert.strictEqual(response.status(),200)

// extract id and print
assert.strictEqual(requestBody.id,688)
//delete