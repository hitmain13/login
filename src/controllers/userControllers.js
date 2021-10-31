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
        const ObjectId = req.params.id
        User.findById(ObjectId, (err, user) => {
            console.log('Getting user ID: ', ObjectId)
            if (err) { return res.send({ err: err.message }) }
            else return res.send(user)
        });
    },

    async getAllUsers(req, res) {
        User.find({}, (err, users) => {
            console.log('Getting all users...')
            if (err) return res.send({ err: err.message })
            else return res.send(users)
        })
    },

    async editUser(req, res) {
        const ObjectId = req.params.id
        User.findByIdAndUpdate(ObjectId, req.body, (err, user) => {
            console.log('Edited user ID:' + ObjectId + ' to: ' + user)
            return res.send(req.body)
        })
    },

    async deleteUser(req, res) {
        const ObjectId = req.params.id
        User.findByIdAndRemove(ObjectId, (err, user) => {
            if (err) return res.send({ err: err.message })
            else {
                console.log('User ID: ' + ObjectId + ' was deleted...')
                return res.send(user)
            }
        })
    }
}