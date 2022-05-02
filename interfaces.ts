interface Animal {
  name: string,
  birthYear: number,
  yieldSound: (sound:string) => string
  getAge: (birth:number) => number
}

class Dog {
  name: string
  birthYear: number
  yieldSound: (sound:string) => string
  getAge: (birth:number) => number

  constructor (name:string, birthYear:number, yieldSound:(sound:string)=>string, getAge:(birth:number)=>number) {
    this.name = name
    this.birthYear = birthYear
    this.yieldSound = yieldSound
    this.getAge = getAge
  }
}

const bark = (sound: string) => {return sound}
const age = (birthYear: number)=> {return  (new Date().getFullYear()) - birthYear}

const dog = new Dog("ruperth", 2010, bark, age)

const cat: Animal = {
  name: 'Marthy',
  birthYear: 2011,
  yieldSound: bark,
  getAge: age
}

console.log(dog)
console.log(cat)
