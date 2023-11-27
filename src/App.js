//Importação das bibliotecas ou modulos
import express from 'express';
import cors from 'cors';

const server = express()
server.use(cors())

server.use('/', (req,res) => {
    res.send('Servidor rodando aqui')    
});

server.listen(4000, () =>{
    console.log('Servidor Ok')
})