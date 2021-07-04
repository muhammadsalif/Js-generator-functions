// TODO: output must be
// Asnwer 

function* createSquareGenerator() {
  let number = 0;
  while (true) {
    number++;
    yield number * number
  }
}
// return iterable object
let generator = createSquareGenerator();

console.log(generator.next()) // 1*1
console.log(generator.next()) // 2*2
console.log(generator.next()) // 3*3
console.log(generator.next()) // 4*4