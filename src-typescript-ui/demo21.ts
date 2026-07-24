import { resolve } from "node:dns";

async function demoRun():Promise<string> {
    
    for(let i=1;i<=10;i++)
    {
        console.log(i);
        await new Promise((resolve)=>setTimeout(resolve,1000));
    }

    return "work done";
}

let output=demoRun();
console.log("some other task 1")
console.log("some other task 2")
console.log("some other task 3")
console.log("some other task 4")

let result=await output
console.log(result)