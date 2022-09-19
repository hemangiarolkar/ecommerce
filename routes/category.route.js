import express from "express";
import{insertCategory,categorylist, updatecategory} from '../controllers/category.controller'
const router = express.Router();
router.post('/insertcategory',insertCategory);
router.get('/categorylist',categorylist);
router.post('/updatecategory/:id',updatecategory);




export default router;
