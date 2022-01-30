const Modal = {
    open(){
        // abrir modal 
        // adicionar a class active ao modal 
        //Pesquisar pelo selector CSS
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active');
    },
    close(){
        // fechar o modal  
        // remover a class active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active');
    }
}

const transactions = [
    {
        id: 1, 
        description: 'Luz', 
        amount: -50000, 
        date: '23/01/2021', 
    },
    {
        id: 2, 
        description: 'Criação website', 
        amount: 500000, 
        date: '23/01/2021', 
    },
    {
        id: 3, 
        description: 'Internet', 
        amount: -20000, 
        date: '23/01/2021', 
    },
    {
        id: 4, 
        description: 'App', 
        amount: -30000, 
        date: '23/01/2021', 
    },
    {
        id: 5, 
        description: 'App', 
        amount: -21530, 
        date: '23/01/2021', 
    }
];


const Transaction = {
    incomes() {
        //Somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        // entradas - saidas
    }
}

//Criando modelo do html
const DOM = {
    transationsContainer: document.querySelector('#data-table tbody'),

        // innerHTML é para receber algo dentro dele
        addTransaction(transaction, index) {
            const tr = document.createElement('tr')
            tr.innerHTML = DOM.innerHTMLTransaction(transaction)

            DOM.transationsContainer.appendChild(tr)
        },
        innerHTMLTransaction(transaction) {
            // Alterando a class
            const CSSclass = transaction.amount > 0 ? "income" : 'expense';

            const amount = Utils.formatCurrency(transaction.amount)

            const html = `
            <tr>
                <td class="description">${transaction.description}</td>
                <td class="${CSSclass}">${amount}</td>
                <td  class="date">${transaction.date}</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover Transação">
                </td>
            </tr>
            `
            return html;
        }
}

//Conversão da quantidade de casas decimais
const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "") 
        value = Number(value) / 100;
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }); // localidade do mundo

        return signal + value;
    }
}

// DOM.addTransaction(transaction[0])

//Para cada elemento o forEach vai executar uma funcionalidade
transactions.forEach(function(transaction) { 
    DOM.addTransaction(transaction)
})