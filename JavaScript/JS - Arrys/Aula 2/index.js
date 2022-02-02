// Arrys splice
//             -5       -4      -3         -2         -1
//              0        1       2          3          4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];

//nomes.splice(indice, delete, +elemnt);

const removidos = nomes.splice(-2, 2); // assim como pop, tbm retorna valores, porem dentro de arry

console.log(nomes, removidos);
