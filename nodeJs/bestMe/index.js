// Escreve uma saída igual ao console.log
process.stdout.write("Olá \n\n");


const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n"+ questions[index] + " > ");
}

ask()

const answers = [];
// on fica ouvindo evento (processo ligado) nesse caso ate o usuario escrever alguma coisa
//trim remove espaco vazio
//exit fecha o processo
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        console.log(answers);
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        O que você aprendeu hoje foi:
        ${answers[0]}
        O que me deixou aborrecido? E o que eu poderia fazer para melhorar foi:
        ${answers[1]}
        O que me deixou feliz hoje:
        ${answers[2]}
        Quantas pessoas ajudei hoje:
        ${answers[3]}
        volte mais tarde para novas reflexões!
    `)
})
