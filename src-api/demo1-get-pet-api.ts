import { request } from "playwright";


const apiRequestContext= await request.newContext(); 

const response=await apiRequestContext.get("https://petstore.swagger.io/v2/pet/10")

console.log(response.status())
console.log(response.statusText())
const body = await response.json()
console.log(body)

console.log(body.id)
console.log(body.name)

// console.log(await response.text())
console.log(body.category.id)