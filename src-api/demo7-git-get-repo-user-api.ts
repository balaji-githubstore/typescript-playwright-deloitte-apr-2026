/* Git API Documentation - https://docs.github.com/en/rest/repos?apiVersion=2022-11-28
 * 
 * 
 */

import { request } from "playwright";

const baseUrl="https://api.github.com"
const resource="/user/repos?visibility=private"

const token = 'read secret.json and store token'

const apiRequestContext= await request.newContext(); 
const response=await apiRequestContext.get(baseUrl+resource,
    {headers:{'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json'}}
)

console.log(response.status())