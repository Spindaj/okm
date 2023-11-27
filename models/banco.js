//importa o banco de dados
import mysql, { createConnection } from 'mysql2';


const conexao = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ferias'
})

//mostra o erro 
conexao.connect((error) => {
    if(error) throw error;
    console.log('Conectado ao banco');
})

export default conexao;