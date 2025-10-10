console.log('Ejercicio 3.3');

/*3.3 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/

const input1 = 'string';
const input2 = 'variable';
const input3 = 'pointer';

const invert = (word) => {
    const inv_string = word.split('').reverse().join('');
  return `${word.length}${' '}${inv_string}`;
};

const result1 = invert(input1);
console.log(result1);
// '6 gnirts'
const result2 = invert(input2);
console.log(result2);
// '8 elbairav'
const result3 = invert(input3);
console.log(result3);
// '7 retniop'