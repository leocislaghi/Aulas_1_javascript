let nomes = ["João", "Thiago", "Pedro", "Leo"]

let nota1 = [6, 5, 7, 9]
let nota2 = [10, 6, 8, 10]

for (let cont = 0; cont <= 3 ; cont ++){
    let media = (nota1[cont]+nota2[cont]) /2
    console.log ("Média do Aluno: " + nomes[ cont] + " É " + media);
}