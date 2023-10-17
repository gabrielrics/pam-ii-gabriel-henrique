var variavel1 = "olá";
let variavel2 = 3;
const variavel3 = 8;

//Para abrir o OUTPUT (para ver como está o código\s) faz: "Ctrl" + "alt" + "n"

console.log("Olá Mundo!");

//O + só contatena, ou seja, ele ficaria assim: olámundo
console.log(variavel1 + "mundo");
//A virgula serve para dar uma espaço, ele ficaria assim: olá mundo
console.log(variavel1, "mundo");

console.log(variavel1 + " Turminha do " + variavel2 + "º ano");



//4 operações básicas
console.log(variavel2 + variavel3);
console.log(variavel2 - variavel3);
console.log(variavel2 * variavel3);
console.log(variavel2 / variavel3);


//"typeof" é uma função para saber o tipo da variável
console.log(typeof variavel1);
console.log(typeof variavel2);

//Se houver outra variável com o mesmo nome, ele emitira o valor do último que foi colocado
//nesse caso, a "variável1" está na primeira linha, tanto que o "typeof" da linha 26 dará como "String"
//mas na linha 33, ele dará "int", pois, na linha 32 ele foi validado novamente
variavel1 = 4;
console.log(typeof variavel1);

//Quando um código está dentro de chavez "{}", ele é um objeto
const pessoa = {
    nome: "Gabriel",
    sobrenome: "Ribeiro",
    idade: 18
}

//Ele exibirá tudo que está dentro do objeto
console.log(pessoa);

//Ele exibirá apenas uma informação do objeto
console.log(
    "Nome:", pessoa.nome,
    "\nIdade:", pessoa.idade
)

//Isso é uma Array
let cachorros = ["Bug", "Zeus", "Zaratrusta"]

//ele mostrará o segundo nome, pois, o array começa do "0"
console.log(cachorros[1])