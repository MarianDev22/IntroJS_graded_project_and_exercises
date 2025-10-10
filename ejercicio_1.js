//Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes campos:---- Nombre (el tuyo o inventado) Apellidos (el tuyo o inventado) Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas de inicio de cada módulo. Fecha en formato “YYYY-MM-DD” Si estás en búsqueda activa con un valor de verdadero o false En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del objeto que hemos creado anteriormente.
console.log('Ejercicio 1')

const usuario = {
  nombre: 'Rose',
  apellidos: 'Dewitt Bukater',
  temas: [{modulo:'Node.js', fechaIni: "2025-10-20"}, {modulo:'Git', fechaIni: "2025-09-10"},{modulo:'react', fechaIni:"2025-12-08"}],
  jobSearch: true,
    
};

console.log(usuario.temas[2].fechaIni)