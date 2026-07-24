

async function demoRun(): Promise<string> {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        await new Promise((resolve)=>setTimeout(resolve,1000));
    }
    return "hello done with work";
}

let output = demoRun()

console.log("run some other task")
console.log("run some other task")
console.log("run some other task")
console.log("run some other task")
let result: string = await output
console.log(result)