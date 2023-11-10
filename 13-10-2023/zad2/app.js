const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/kontakt', contactRouter);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });

module.exports = app;

