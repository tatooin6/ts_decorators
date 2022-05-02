// INHERITANCE
class Animal {
  name: string;

  constructor (name: string) {
    this.name = name
  }
}

class Doggy extends Animal {
  tooth: number

  constructor(tooth: number, name: string){
    super(name)
    this.tooth = tooth
  }
}


// INTERFACES IMPLEMENTATIONS
interface IHuman {
  gender: string
  complexion: string
}

interface IPerson {
  name: string
  display(): void
}

class Man implements IHuman, IPerson {
  gender: string
  complexion: string
  name: string

  constructor (gender:string, complexion:string, name:string) {
    this.gender = gender
    this.complexion = complexion
    this.name = name
  }

  display(){
    console.log(`Name: ${this.name}, gender: ${this.gender}, complexion: ${this.complexion}`)
  }

}

const employeeOne = new Man('masculine', 'latin', 'antonio')
console.log(employeeOne)
