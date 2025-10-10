console.log('Ejercicio 3.2');

const input = 10;
const secondInput = 1;
const thirdInput = 11234;
// create your function here

const separate = (num) => {
  const num_to_str = num.toString(); 
  return num_to_str.split("").join('-');
};

const result1 = separate(input);
const result2 = separate(secondInput);
const result3 = separate(thirdInput);



console.log(result1);
console.log(result2);
console.log(result3);
// '1-0'
// '1'
// '1-1-2-3-4'