"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidaCPF_1 = __importDefault(require("./ValidaCPF"));
class GerarCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF_1.default.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF_1.default.geraDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return this.formatado(novoCpf);
    }
    formatado(cpf) {
        return (cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11));
    }
}
exports.default = GerarCPF;
