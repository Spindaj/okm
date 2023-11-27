import express from 'express';

const rotas = express.Router();

rotas.get('/ferias', listaTudo)
rotas.post('/viagem', inserir)
rotas.put('/viagem/:codigo', alterar)
rotas.delete('/viagem/:codigo', excluir)

//export default rotas
export { rotas as default }