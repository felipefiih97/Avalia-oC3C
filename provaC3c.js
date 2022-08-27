/*Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e 
retorne sua classificação quanto ao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)*/

// nota : ver a identação eo a possivel troca de var para let 

function validaTriangulo(){
    var lado1 = parseInt(document.querySelector(".lado1").value);
    var lado2 = parseInt(document.querySelector(".lado2").value);
    var lado3 = parseInt(document.querySelector(".lado3").value); 
    const equiResult = "Triângulo Equilatero";
    const isoceResult = "Triângulo Isoceles";
    const escalResult = "Triângulo Escaleno"; 

    if ((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2)){
        if(lado1 == lado2 && lado1==lado3){
           document.querySelector(".resultado").innerHTML = equiResult; //Equilatero 
        }else if((lado1 == lado2) || (lado1==lado3) || (lado2==lado3)) {
            document.querySelector(".resultado").innerHTML = isoceResult; // Isoceles
        }else{
        document.querySelector(".resultado").innerHTML = escalResult; // Escaleno
        }
    }
};


/*  02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.*/

function calcBhakara(ax2,bx,c){
    var ax2 = parseInt(document.querySelector(".ax2").value);
    var bx =  parseInt(document.querySelector(".bx").value);
    var c =   parseInt(document.querySelector(".c").value);
    var delta = bx ** 2 - (4 * ax2 * c);
    const listaResult = [];
    if (delta >= 0){
        const listaResult = [];
        r1 = (-bx + Math.sqrt(delta))/(2 * ax2);
        listaResult.push(r1);
        r2 = (-bx - Math.sqrt(delta))/(2 * ax2);
        listaResult.push(r2);
        return listaResult;
        
    }else{
        return "Delta é negativo";
    }

}

console.log(calcBhakara(1,3,2))
console.log(calcBhakara(3,1,2))

/*03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.*/

function sistemaNotas(nota) {
    var notaCorrigida = arredondar(nota);
    if (notaCorrigida < 40) {
        console.log(`Aluno foi reprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Aluno foi aprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota < 38) {
        return nota
    } else if (nota % 5 >= 3 ) {
        return nota = nota + (5 - (nota % 5))
    } else {
        return nota = nota - (nota % 5)
    }
}

sistemaNotas(29);
sistemaNotas(38);
sistemaNotas(84);

/* 
LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.
Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.
Exemplo de retorno:
Entrada:
45
Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 
16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, ]
Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.
*/ 

const ListaMoura = (NumeroLimite) => {
    let listaResult = []
    for( let i = 1; i <= NumeroLimite; i++){
         if(i % 5 == 0){
            listaResult.push("Luidy")
         }
         if(i % 9 == 0){
            listaResult.push("Moura")
         }
         if (i % 5 == 0 && i % 9 == 0){
            listaResult.push("LuidyMoura")
         }
         if (i % 5 != 0 || i % 9 != 0) {
            listaResult.push(i)
         }
    }
    return (listaResult)
 }

console.log(ListaMoura(45));
