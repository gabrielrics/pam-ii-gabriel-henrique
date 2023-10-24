let num1 = 1;
let num2 = 2;
var msg = "Olá amigos! Esse é o número:";

//Se fizer assim, ele contatenará, pois, o js entende o "msg" como String, ou seja,
//se tiver o '+' (que é uma concatenação) ele exibiria 'Olá amigos! Esse é o número: 1'.
//Porém, se não houver uma váriavel dada como String, ele somará, ou seja, ele apareceria '3'.
console.log(msg+num1+num2);

//////////////////////////////////////////////////////////////////////////////

function soma() {
    let resultado = num1 + num2;
    console.log(msg, resultado);
}

//Para que o function funcione, ele precisa chama-la primeiro
soma();


////////////////////////////////////////////////////////////////////////////////

//Os parametros estão dentro dos parenteses da função
function somaComParametros(valor1, valor2) {
    console.log("O resultado é: ",  valor1 + valor2);

}
//Se colocar o código acima e chama-la com o 'somaComParametros();', ele dará 'NaN'.
//NaN significa: Not-A-Number (não é um número).
somaComParametros();

////////////////////////////////////////////////////////////////////////////////

//Essa seta está sendo uma abreviação de como se declarar uma função
//chamada de 'Aarow function'.

//A função espera a entrada, ela recebe a entrada, ela processa e retorna (com o return).
const multiplicacao = (n1, n2) => {
    return n1 * n2;
    
}

console.log(multiplicacao(2,3));

////////////////////////////////////////////////////////////////////////////////

let usuario = {
    nome: "Gabriel",
    idade: 18,
    cidade: "São Paulo",
    calvo: true
};

console.log (typeof usuario)
console.log (
    "nome:", usuario.nome,
    "\n idade:", usuario.idade
);

console.log(typeof usuario.calvo);

const nomes = ["Gabriel", "Leirbag"]

console.log(nomes);
console.log(typeof nomes);
console.log(nomes[0]);

const somaMelhorada = (n1, n2) => {
    let resultNovaFunc = ''
    if (typeof n1 == Number && typeof n2 == Number) {
        resultNovaFunc = n1 + n2;
        return "Resultado:", resultNovaFunc;
    }
//Somente com esse 'return' substitui o 'else', pois, ele processa e retorna.
//O else até existe no JS, porém, o return é mais profissional.
    return "Valores de entrada inválidos"
}

console.log(somaMelhorada(6,9));