class Demo1Var
{
    //static variable or class variable
    public static aS:number=10;
    public static bS:number=10;

    //non-static variable or instance variable
    public aNS:number=10;
    public bNS:number=20;

}

Demo1Var.aS=-1000
console.log(Demo1Var.aS)
console.log(Demo1Var.bS)

let obj1=new Demo1Var()
let obj2=new Demo1Var()

obj1.aNS=5000

console.log(obj1.aNS)
console.log(obj1.bNS)

console.log(obj2.aNS)
console.log(obj2.bNS)

