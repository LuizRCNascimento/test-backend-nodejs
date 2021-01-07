const { port } = require ('../api/config/config.js');
const express = require('express');
const app = express();

const morgan = require ('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

const productRoutes = require('./routes/product-route');
const categoryRoutes = require('./routes/category-route');


app.use('/product',productRoutes);
app.use('/category',categoryRoutes);

app.use((req,res,next) =>{
  const error = new Error('Method not found for this route. File:app.js');
  error.status = 404;
  next (error);
})

app.use ((error, req, res, next) =>{
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message 
    }
  });
});

app.listen (port, () => {
    console.log(`Server Started at PORT ${port}!`);
  });

module.exports = app;