import express from "express";
import{addproduct, productlist, updateproduct} from '../controllers/product.controller'
const router = express.Router();
router.post('/addproduct',addproduct);
router.get('/productlist',productlist);
router.post('/updateproduct/:id',updateproduct);


export default router;