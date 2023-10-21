"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Js/Ts
const GerarCPF_1 = __importDefault(require("./modules/GerarCPF"));
//css
require("../assets/css/style.css");
// Função auto-executável
function Gerar() {
    const gera = new GerarCPF_1.default();
    const cpfGerado = document.querySelector(".cpf-gerado");
    if (cpfGerado)
        cpfGerado.innerHTML = gera.geraNovoCpf();
}
const botao = document.querySelector("button");
if (botao) {
    botao.addEventListener("click", () => {
        Gerar();
    });
}
Gerar();
