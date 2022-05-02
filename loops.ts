let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}


for (let index in arr) {
  console.log(`${index}: ${arr[index]}`)
}

function* generator(index: number) {
  while (index < 3){
    yield index
    index++
  }
}

const iterator = generator(0)

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
