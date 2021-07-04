function* generatorExample() {
    yield 8;
    yield 9;
    yield 10;
    // return 15;
}

let generator = generatorExample();
// returning object which is iterable
console.log(generator);
// getting value right after pause
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// getting values of each yield
// for (let eachItem of generator) console.log(eachItem)


