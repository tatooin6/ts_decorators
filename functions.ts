function display(a:string, b:string):void 
function display(a:number, b:number): number //Compiler Error: Duplicate function implementation
function display(a:any, b:any): any{
  return a+b
}

console.log(display("Hello ", "Steve"));
console.log(display(10, 20));

// REST PARAMETERS

function Greet(greeting: string, ...names: string[]){
  console.log(`${greeting} ${names.join(", ")}!`)
}

Greet('Hello', 'Peter', 'Miles', 'Robert')
