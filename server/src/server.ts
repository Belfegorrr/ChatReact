import express from 'express';
import {routes} from './routes';


const app = express();

app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  console.log('HTTP server running!');
});






















//GET buscar ,POST cadastrar ,PUT atualizar ,PATCH Atualizar info unica ,DELETE 
//SQLite
//Prisma

