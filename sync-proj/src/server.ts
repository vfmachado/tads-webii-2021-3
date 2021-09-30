import express, { Request, Response } from 'express';
import { publicRouter } from './routes/public-routes';
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(publicRouter);

app.post('/oi', (req, res) => {
  return res.json(req.body);
})

app.get('/my-page', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Ok</h1>
    <p>Funciona, viu!?</p>
  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log('Server started at 3000');
});
