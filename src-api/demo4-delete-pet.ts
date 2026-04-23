/**
 * Get method
 * Example for path parameter
 */
import { request } from "playwright";

const apiRequestContext= await request.newContext(); 

const response=await apiRequestContext.delete("https://petstore.swagger.io/v2/pet/688",
    {headers:{'api_key':'special_key'}})

console.log(response.status())

