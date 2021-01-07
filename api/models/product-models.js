 //Title, description, price, category

const mongoose = require('../server');
const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,      
    title: {
        type: String,
        require: true,
        unique: true, 
    },   
    description: {
        type: String,
        require: false,
    },    
    price: {
        type: Number,
        require: false,
    },    
    category: {  //alterar dados para capturar informacao da tabela Categoria
        type: String,
        require: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model ('Products', productSchema);