import express from "express";
import{addsubcategory, subcategorylist, updatesubcategory} from '../controllers/subcategory.controller'
const router = express.Router();
router.post('/addsubcategory',addsubcategory);
router.get('/subcategorylist',subcategorylist);
router.post('/updatesubcategory/:id',updatesubcategory);



export default router;