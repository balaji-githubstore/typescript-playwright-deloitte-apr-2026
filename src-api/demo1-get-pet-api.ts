/**
 * Get method
 * Example for path parameter
 */
import { request } from "playwright";


const apiRequestContext= await request.newContext({baseURL:"https://petstore.swagger.io/v2/"}); 

const response=await apiRequestContext.get("pet/10")

console.log(response.status())
console.log(response.statusText())
const body = await response.json()
console.log(body)

console.log(body.id)
console.log(body.name)

// console.log(await response.text())
console.log(body.category.id)

body.name = "don";

console.log(body.name.toUpperCase());