console.log('Ejercicio 4');

/*Ejercicio 4 Transformaciones con map y filter
Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el listado de los proyectos en el que sus desarrolladores trabajan.
Estos son los datos:*/

const datos = [
{
id: 1,
nombre: 'Juan',
habilidades: ['JavaScript', 'HTML', 'CSS'],
proyectos: [
{ id: 1, nombre: 'Proyecto 1' },
{ id: 2, nombre: 'Proyecto 2' }
]
},
{
id: 2,
nombre: 'María',
habilidades: ['Python', 'SQL', 'Django'],
proyectos: [
{ id: 3, nombre: 'Proyecto 3' },
{ id: 4, nombre: 'Proyecto 4' }
]
},
{
id: 3,
nombre: 'Pedro',
habilidades: ['Java', 'Spring', 'Hibernate'],
proyectos: [
{ id: 5, nombre: 'Proyecto 5' },
{ id: 6, nombre: 'Proyecto 6' }
]
}
];

const getDevJs = (input) => {
  const devJsList = input.filter(({habilidades}) => habilidades.includes('JavaScript'));
  
  return devJsList;
};
const result1 = getDevJs(datos);
console.log(result1);

const getProjects = (input) => {
    const allProjects = input.map(data => data.proyectos).map(proyecto => proyecto.map(({nombre}) => nombre)).map(elem => elem.join(', '));
    return allProjects;
};
const result2 = getProjects(datos);
console.log(result2);
