let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A
let varD;

varD = varA;
varA = varB;
varB = varC;

console.log(varA, varB, varD);
