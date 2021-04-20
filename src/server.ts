//Importação da biblioteca
import express, { request } from "express";

const app = express();

/*
    métodos https: GET = buscas
                   POST = criação
                   PUT = alteração
                   DELETE = deletar
                   PATCH = alterar informação específica  
*/

app.get("/", (request, response) => {
    //return response.send("Olá NLW 05")
    return response.json({
        message: "Olá Nlw 05 !"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso !"
    });
});

//Inicialização do server
app.listen(3333, () => 
    console.log("Server is running on port 3333")
);