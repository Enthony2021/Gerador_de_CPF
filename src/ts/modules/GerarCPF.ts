import ValidaCPF from "./ValidaCPF";

export default class GerarCPF {
    rand (min: number = 100000000, max: number = 999999999): string {
        return String(Math.floor(Math.random() * (max-min) + min));
    }

    geraNovoCpf(): string {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return this.formatado(novoCpf);
    }

    formatado(cpf: string): string {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
} 