 //category

 const mongoose = require('../server');
 // const bcrypt = require ('bcrypt');

const categorySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,      
    categorydesc: {
        type: String,
        require: false,
    },    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model ('Category', categorySchema);