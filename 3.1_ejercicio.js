console.log('Exercise 3')
/*3.1 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:*/

const create_path = (list) => {
  const lastElement = [...list].pop().trim();
  const rest = [...list].slice(0,-1).join('/');
  return `${rest}.${lastElement}`;
};

const input1 = [
'Downloads',
'Videos',
'capture',
'mp4',
]
const result1 = create_path(input1); // 'Downloads/Videos/capture.mp4'
console.log(result1);

const input2 = [
'CodinGame',
'python',
'py',
];
const result2 = create_path(input2); // 'CodinGame/python.py'
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
const result3 = create_path (input3);
console.log(result3);
// 'programming/languages/easy/beginner/useful/pythonstuff.py'

 