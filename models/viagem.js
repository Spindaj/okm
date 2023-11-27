import banco from '../models/banco'

export default listaTudo(){
    return new Promise(ok, nok) => {
        banco.query('SELECT * FROM viagem', (error, results)) => {
            if(error) { nok(error); return;}
            ok(results);
        }
    }
}