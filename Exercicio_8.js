let alunos =  ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"]

let notas = [9, 5, 7, 10, 4]

let destaque = 0;
let estahBom = 0;
let precisaMelhorar = 0;

for (let i = 0; i < alunos.length; i++) {

    let status = notas[i] >= 6 ? "Aprovado" : "Reprovado";

    console.log(alunos[i] + " - Nota: " + notas[i] + " - Status: " + status);

    if (notas[i] >= 8) {
        console.log("Classificação: Destaque");
        destaque++;
    }
    else if (notas[i] >= 6 && notas[i] <= 7) {
        console.log("Classificação: Está bom");
        estahBom++;
    }
    else {
        console.log("Classificação: Precisa melhorar");
        precisaMelhorar++;
    }

    console.log("-----------------------");
}

console.log("Resumo da Turma");
console.log("Destaque: " + destaque);
console.log("Está bom: " + estahBom);
console.log("Precisa melhorar: " + precisaMelhorar);