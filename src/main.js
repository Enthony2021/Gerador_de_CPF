// js
import GeraCPF from './modules/GeraCPF';

//css
import './assets/css/style.css';

// Função auto-executável
(function (){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})(); 

const botao = document.querySelector('button');
botao.addEventListener('click', ()=>{
    (function (){
        const gera = new GeraCPF();
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = gera.geraNovoCpf();
    })();
});