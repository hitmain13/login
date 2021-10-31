const requireDir = require('require-dir');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes');

requireDir("./models")

app.use(express.json());
app.use('/', routes);
app.listen(3000, () => {
    console.log("API rodando na porta 3000.")
})

mongoose.connect('mongodb://localhost:27017/login', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
    console.log('Connected to Database ' + 'login');
});