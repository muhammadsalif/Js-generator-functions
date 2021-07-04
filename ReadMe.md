# Generator functions

In JavaScript, a generator is a function which returns an object on which you can call next() . Every invocation of next() will return an object of shape — { value: Any, done: true|false. }
***
The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
***
A normal function such as this one cannot be stopped before it finishes its task i.e its last line is executed. It follows something called run-to-completion model.
***
Normal function 👇
```
function normalFunc() {
  console.log('I')
  console.log('cannot')
  console.log('be')
  console.log('stopped.')
}
```
***
In contrast, a generator is a function that can stop midway and then continue from where it stopped.
```
function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6
// This will be executed first.
// Hello, 
// I will be printed after the pause
// World!
// undefined    
```

***
For **Use cases** & **Advantages** of generator functions see this article 👇

<https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5>

Mdn documentation 👇

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*>
