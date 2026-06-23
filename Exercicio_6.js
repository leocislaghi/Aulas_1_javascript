let matriculado = true
let aluno = 14

if (!matriculado) {console.log("Aluno não matriculado");}
else if (aluno < 6) {console.log("Educação Infantil")}
else if (aluno >= 6 && aluno <= 10) {console.log("Ensino Fundamental I")}
else if (aluno >= 11 && aluno <= 14) {console.log("Ensino Fundamental II")}
else if (aluno >= 15 && aluno <=17) {console.log("Ensino Médio")}
else if (aluno >= 18) {console.log("Ensino Superior ou EJA")}