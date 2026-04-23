/* Git API Documentation - https://docs.github.com/en/rest/repos?apiVersion=2022-11-28
 * 
 * 
 */

import { request } from "playwright";
import fs from "node:fs";

const baseUrl = "https://api.github.com"
const resource = "/user/repos?visibility=private"

const secretJson=JSON.parse(
    fs.readFileSync('test-data/secret.json','utf-8')
)

const apiRequestContext = await request.newContext();
const response = await apiRequestContext.get(baseUrl + resource,
    {
        headers: {
            'Authorization': 'Bearer ' + secretJson.token,
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2026-03-10'
        }
    }
)

console.log(response.status())

//try to write logic to print full_name for each repo from the response
