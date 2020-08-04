import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

const PORT : string|number = process.env.PORT || 3333;

app.use(cors())
app.use(express.json())
app.use(routes);



app.listen(PORT);