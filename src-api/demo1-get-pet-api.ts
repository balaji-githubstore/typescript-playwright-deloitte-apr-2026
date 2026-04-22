import { request, type APIRequestContext, type APIResponse } from "playwright";

const baseUrl:string="https://petstore.swagger.io/v2"
const resource:string="/pet/10"

const apiRequestContext= await request.newContext(); 

const response=await apiRequestContext.get(baseUrl+resource)

console.log(response.status())
const body = await response.json()
console.log(body)

console.log(body.id)
console.log(body.name)