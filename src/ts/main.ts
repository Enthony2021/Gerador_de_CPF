//Js/Ts
import GerarCPF from "./modules/GerarCPF";

//css
import "../assets/css/style.css";

// Função auto-executável
function Gerar() {
  const gera = new GerarCPF();
  const cpfGerado: HTMLElement | null = document.querySelector(".cpf-gerado");
  if (cpfGerado) cpfGerado.innerHTML = gera.geraNovoCpf();
}

const botao: HTMLButtonElement | null = document.querySelector("button");
if (botao) {
  botao.addEventListener("click", () => {
    Gerar();
  });
}

Gerar();
