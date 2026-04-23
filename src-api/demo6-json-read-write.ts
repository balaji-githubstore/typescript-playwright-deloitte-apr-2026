import fs from "node:fs";

//string to json object
const output=JSON.parse(
    fs.readFileSync('test-data/new-pets.json','utf-8')
)
console.log(output[0])
