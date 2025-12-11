const prompt = require('prompt-sync')();

const campeoes = ["Batman", "Kratos", "Sakura", "Goku", "Naruto", "Luffy", "Jinx"];


function nomeHeroi() {
    for (let i = 0; i < campeoes.length; i++) {
        let selecao = campeoes[i]
        console.log("Seleção " + i + ": " + selecao)

    }

}

console.log("------ Selecione seu Campeão ------ ")
nomeHeroi()

console.log("---------------")


let heroiSelecionado

while (!heroiSelecionado) {
    let escolha = Number(prompt("Escolha seu Campeão pelo número: "));
    heroiSelecionado = campeoes[escolha];



    if (!heroiSelecionado) {
        console.log("Opção Inválida! Tente de novo.")
    }
}

console.log("Você escolheu: " + heroiSelecionado)

console.log("----- Escolha o XP ----- ")
console.log("XP de 0 a 10001")


let xpHeroi = Number(prompt("Digite o xp do seu Campeão: "))
let nivel = ""
if (xpHeroi < 1000) {
    nivel = "Ferro";
}
else if (xpHeroi <= 2000) {
    nivel = "Bronze";
}
else if (xpHeroi <= 5000) {
    nivel = "Prata";
}
else if (xpHeroi <= 7000) {
    nivel = "Ouro";
}
else if (xpHeroi <= 8000) {
    nivel = "Platina";
}
else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
}
else if (xpHeroi <= 10000) {
    nivel = "Imortal";
}
else {
    nivel = "Radiante";
}

console.log("-----------------------------------------------------------")
console.log("O seu Campeão é: ** " + heroiSelecionado + " ** e " + "Está no nível: ** " + nivel + " **")
console.log("-----------------------------------------------------------")
