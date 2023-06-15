alert("Nesse desafio nós vamos montar uma lista de compras juntos. Bora?");

let hortifruti = [];
let frios = [];
let congelados = [];
let doces = [];
let bebidas = [];
let higienePessoal = [];
let limpeza = [];
let outros = [];

let perguntaUm = "";
let perguntaDois = "";
let perguntaTres = "";

while(true) {
    perguntaUm = prompt("Deseja adicionar algum item à sua lista de compras? Digite sim ou não");

    if (perguntaUm == "sim") {
        perguntaDois = prompt("Qual item deseja inserir?");
        perguntaTres = prompt(`Em qual categoria deseja adicionar ${perguntaDois}? Hortifruti, Frios, Congelados, Doces, Bebidas, Higiene Pessoal, Limpeza ou outros?`);
        
        if (perguntaTres == "Hortifruti") {
            hortifruti.push(perguntaDois);
        } else if (perguntaTres == "Frios") {
            frios.push(perguntaDois);
        } else if (perguntaTres == "Congelados") {
            congelados.push(perguntaDois);
        } else if (perguntaTres == "Doces") {
            doces.push(perguntaDois);
        } else if (perguntaTres == "Bebidas") {
            bebidas.push(perguntaDois);
        } else if (perguntaTres == "Higiene Pessoal") {
            higienePessoal.push(perguntaDois)
        } else if (perguntaTres == "Limpeza") {
            limpeza.push(perguntaDois)
        } else {
            outros.push(perguntaDois)
        }
    } else if (perguntaUm == "não") {
        break;
    } else {
        alert("Resposta inválida!")
    }
}

alert(`Essa é a sua lista de compras:\n Hortifruti: ${hortifruti}\n Frios: ${frios}\n Congelados: ${congelados}\n Doces: ${doces}\n Bebidas: ${bebidas}\n Higiene Pessoal: ${higienePessoal}\n Limpeza: ${limpeza}\n Outros: ${outros}`);

alert("Obrigada por estar comigo em mais um dia de desafio! No próximo, além de montarmos a lista, teremos também a opção de excluir itens. Aguardo você lá!")
