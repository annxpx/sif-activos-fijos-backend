import 'dotenv/config';
import App from './app';
//const PORT = process.env.APP_PORT || 3001;

//Iniciar Aplicacion
App.listen(process.env.APP_PORT as unknown as number | 3001);