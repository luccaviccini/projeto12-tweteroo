import  express, { json }  from "express";
import cors from "cors"

// const variables
const PORT = 5000;
const server = express();
server.use(cors());

server.use(json());





// server port - @ the end of the code

server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})