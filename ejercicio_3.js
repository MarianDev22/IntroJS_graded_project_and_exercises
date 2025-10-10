console.log('Exercise 3')
/*3.1 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/

const concat = (list) => {
  const lastElement = [...list].pop();
  const rest = [...list].slice(0,-1).join('/');
  return `${rest}.${lastElement}`;
};

const input1 = [
'Downloads',
'Videos',
'capture',
'mp4',
]
const result1 = concat(input1); // 'Downloads/Videos/capture.mp4'
console.log(result1);

const input2 = [
'CodinGame',
'python',
'py',
];
const result2 = concat(input2); // 'CodinGame/python.py'
console.log(result2);

const input3 = [
'programming',
'languages',
'easy',
'beginner',
'useful',
'pythonstuff',
'py',
 ]
const result3 = concat(input3);
console.log(result3);
// 'programming/languages/easy/beginner/useful/pythonstuff.py'

 