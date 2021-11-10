const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const routes = require('./routes/mainRouter');
app.use(routes);

app.listen(3000, () => {
  console.log('Listening at 3000');
});