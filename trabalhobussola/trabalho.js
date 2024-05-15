class no {
    constructor(dado, prioridade) {
        this.dado = dado
        this.prioridade = prioridade
        this.proximo = null
    }
}
class inserirPriodade {
    inserirCPrioridade(dado, prioridade) {
        const novoNo = new no(dado, prioridade);
        if (!this.inicio || prioridade > this.inicio.prioridade) {
            novoNo.proximo = this.inicio
            this.inicio = novoNo;
        } else {
            let atual = this.inicio;
            while (atual.proximo && prioridade <= atual.proximo.prioridade) {
                atual = atual.proximo;
            }
            novoNo.proximo = atual.proximo;
            atual.proximo = novoNo;
        }
    }
}
const inserirPriodade = new inserirPriodade();
inserirPriodade.inserirCPrioridade("teste 1", 2);
inserirPriodade.inserirCPrioridade("teste 2", 1);
inserirPriodade.inserirCPrioridade("teste 3", 3);
console.log(inserirPriodade.inicio);