// Los datos que lanza el Buffer es en Hexadecimal: ver el codigo ASCII

let buffer1 = Buffer.alloc(4);
console.log(buffer1);

let buffer2 = Buffer.from([1, 2, 5]);
console.log(buffer2);

let buffer3 = Buffer.from('Hola');
console.log(buffer3);


// --

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97; //En el 97 empieza la a. a se puede sacar con Alt+97
}

console.log(abc);
console.log(abc.toString());
