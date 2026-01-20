const data = {
    nombre: "juan",
    edad: 25,
    esEstudiante: true,
    cursos: ["matematicas", "ciencias", "historia"],
    direccion: {
        calle: "123 Main St",
        ciudad: "Bogota",
        codigoPostal: "110221"
    }
}
console.log("esto se puede desglosar: ", data);

const datafromjson = JSON.stringify(data);
console.log("esto se puede desglosar: ", datafromjson);
const jsonparseado = JSON.parse(datafromjson)

console.log(jsonparseado.nombre)