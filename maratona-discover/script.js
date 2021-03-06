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

const Storage = {
    //Transformando string para um array
    get() {
        return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
    },
    set(transactions) {
        //Transformando array em string por JSON.stringify
        localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions));
    }
}

// const transactions = [
//     {
//         description: 'Luz', 
//         amount: -50000, 
//         date: '23/01/2021', 
//     },
//     {
//         description: 'Criação website', 
//         amount: 500000, 
//         date: '23/01/2021', 
//     },
//     {
//         description: 'Internet', 
//         amount: -20000, 
//         date: '23/01/2021', 
//     },
//     {
//         description: 'App', 
//         amount: -30000, 
//         date: '23/01/2021', 
//     },
//     {
//         description: 'App', 
//         amount: -21530, 
//         date: '23/01/2021', 
//     }
// ];


const Transaction = {
    all: Storage.get(),

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
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td  class="date">${transaction.date}</td>
            <td>
                <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover Transação">
            </td>
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
    formatAmount(value) {
        //Tratando quando digitar pontinho
        value = value * 100;
        return Math.round(value);
    },
    formatDate(date) {
        // Convertendo a formatacão da data
        const splittedDate = date.split("-") 
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "") 
        value = Number(value) / 100;
        console.log(value)
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }); // localidade do mundo
        return signal + value;
    }
}

const Form = {
    //criacao dos campos lincando uma conexao entre html e js
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    //Pegar valores
    getValues() {
        console.log(Form)
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },
    //pegar os campos e verificar se está vazio
    validateFields() {
        const { description, amount, date } = Form.getValues();
        
        if(description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    formatValues() {
        let { description, amount, date } = Form.getValues();
        amount = Utils.formatAmount(amount);
        date = Utils.formatDate(date);
        return { 
            description, 
            amount, 
            date
        }
    },

    saveTranslation(transaction) {
        Transaction.add(transaction);
    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        //retirar comportamento padrao do caminho quando for salvar no modal
        event.preventDefault();
        // Verificar se todas as informacoes foram preenchidas
        try {
            Form.validateFields();
            // formatar os dados para salvar 
            const transaction = Form.formatValues()
            // salvar 
            Form.saveTranslation(transaction)
            // apagar os dados do formulario 
            Form.clearFields()
            Modal.close()
        } catch (error) {
            alert(error.message);
        }
    }
}

const App = {
    init(){
        //Para cada elemento o forEach vai executar uma funcionalidade
        Transaction.all.forEach((transaction, index) => { 
            DOM.addTransaction(transaction, index);
        })

        DOM.updateBalance()

        Storage.set(Transaction.all)
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()