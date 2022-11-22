import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const PORT = process.env.PORT || 4000;
// const PORT = 3000;
// const DB = process.env.MONGODB_URI || 'mongodb://127.0.0.1/Preguntados';
const DB = process.env.DB || 'mongodb+srv://preguntados:preguntados@preguntados.y0vjnwo.mongodb.net/preguntados?retryWrites=true&w=majority';

const app = express();

mongoose.connect(DB)
          .then(() => console.log("Mongo ok"))
          .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(express.json());


import questionRouter from './Routes/Router.js';
app.use('/api', questionRouter);


app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
})
