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
        description: 'Luz', 
        amount: -50000, 
        date: '23/01/2021', 
    },
    {
        description: 'Criação website', 
        amount: 500000, 
        date: '23/01/2021', 
    },
    {
        description: 'Internet', 
        amount: -20000, 
        date: '23/01/2021', 
    },
    {
        description: 'App', 
        amount: -30000, 
        date: '23/01/2021', 
    },
    {
        description: 'App', 
        amount: -21530, 
        date: '23/01/2021', 
    }
];


const Transaction = {
    all: transactions,

    add(transaction) {
        Transaction.all.push(transaction);
        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1);
        App.reload()
    },

    incomes() {
        //Somar as entradas
        let income = 0;
        //pegar todas as transacoes
        // para cada transacao
        Transaction.all.forEach(transaction => {
            //se ela for maior que zero 
            if(transaction.amount > 0) {
                // somar a uma variável e retornar a variável
                income += transaction.amount;
            }
        })
        return income;
    },
    expenses() {
        // somar as saídas
        let expense = 0;
        // pegar todas as transacoes
        // para cada transacao
        Transaction.all.forEach(transaction => {
            //se ela for menor que zero 
            if(transaction.amount < 0) {
                //somar a uma variável e retornar a variável
                expense += transaction.amount;
            }
        })
        return expense;
    },
    total() {
        // entradas - saidas
        return Transaction.incomes() + Transaction.expenses();
    }
}

//Criando modelo do html
const DOM = {
    transationsContainer: document.querySelector('#data-table tbody'),

    // innerHTML é para receber algo dentro dele
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.dataset.index = index;

        DOM.transationsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction, index) {
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
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes());
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses());
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total());
    },

    clearTransactions() {
        DOM.transationsContainer.innerHTML = "";
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


const App = {
    init(){
        //Para cada elemento o forEach vai executar uma funcionalidade
        Transaction.all.forEach(transaction => { 
            DOM.addTransaction(transaction)
        })

        DOM.updateBalance()

    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },

}

App.init()

Transaction.remove(0)





// Transaction.add({
//     description: 'Caneta',
//     amount: 500,
//     date: '23/01/2021'
// })




