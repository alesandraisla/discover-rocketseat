// express cria um servidor para mostrar tudo que esta contruido no index.ejs (renderiza)
const express = require('express');

//instanciar
const app = express();

app.set("view engine", "ejs");

//criando a rota
app.get("/", function(req, res) {
    const items = [
        { 
            title: "A", 
            message: "bacate e avião"
        },
        { 
            title: "B", 
            message: "ota, barco e bonitão"
        },
        { 
            title: "C", 
            message: "achorrinho e coelhinho"
        }
    ]; 
    const subtitle = "Frases diversas"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    }); // o que vai chamar
})

app.get("/sobre", function(req, res) { 
    res.render("pages/about");
})

//rodar (fica ouvindo uma porta)
app.listen(8080);
console.log("rodando")