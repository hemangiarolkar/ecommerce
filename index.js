import express from 'express';
import categoryRoute from './routes/category.route';
import SubCategory from './routes/subcategory.route';
import Product from './routes/product.route';
import mongoose from 'mongoose';
//console.log(userRoute);
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({limit: '50mb',extended: 'true'}))



app.use('/category', categoryRoute)
app.use('/subcategory',SubCategory)
app.use('/product',Product)
mongoose.connect('mongodb://localhost:27017/myproject')
    .then(() => {
        console.log("mongodb started.");

    }).catch(() => {
        console.log('Mongodb connection failed.');
    })



app.listen(9000);