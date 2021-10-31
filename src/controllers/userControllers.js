const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
        User.create(req.body)
            .then(() => {
                console.log("Sent a post request: ", req.body)
                res.send(req.body)
            }).catch(err => res.send({ err: err.message }))
    },
    async getUser(req, res) {
        /* 
        To do: 
        - Verificar como faz para pegar o query string (parâmetro de url).
        - Buscar o cadastro no banco passando o id recuperado pela url.
        */
        const id = req.params.id
        User.findById(id, (err, user) => {
            if (err) {res.send({ err: err.message})}
            else res.send(user)
        });
    },
    async getAllUser(req, res) {
        /* 
        To do: 
        - Buscar todos no banco.
        */
    }
}