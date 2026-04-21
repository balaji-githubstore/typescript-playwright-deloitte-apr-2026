function add(a:number,b:number):number{
    return a+b;
}

function areaOfCircle(radius:number):number{
    return 3.14*radius*radius;
}

//Named parameters 
function addMe({num1,num2}:{num1:number,num2:number})
{
    return num1+num2;
}


let result:number= add(4,4);
console.log(result);

console.log(add(5,5));
console.log(areaOfCircle(5));

//how to call named parameter
//any order is fine
//user knows exactly the argument detail. no need to remember
console.log(addMe({num2:2,num1:3}))

//asycn method usage example 

let output:number=addMe({num1:9,num2:6})
