const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let subUserSchema = new Schema({
    username: {type: String, required: true, max: 100},
    domain: {type: String, required: true, max: 100},
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100}
});

 module.exports = mongoose.model('SubUser', subUserSchema);