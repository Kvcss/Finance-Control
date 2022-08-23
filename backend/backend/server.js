const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


//routes 


//middlweres

//config

const dbName = "Teste";
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// atrelar as rotas no express
app.get("/", (req, res) =>{
    res.json({message: "Rota teste!!!"});
});

app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`);

});