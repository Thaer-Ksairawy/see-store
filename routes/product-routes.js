import  express  from "express";

import{
    getAllData,
    createElement,
    getElementById,
    updateElement,
    deleteElement
} from "../controllers/products-controller.js"

const productRoutes = express.Router();


productRoutes.get('/data/all',getAllData);
productRoutes.get('/data/:id',getElementById);
productRoutes.post('/data/',createElement);
productRoutes.patch('/data/:id',updateElement);
productRoutes.delete('/data/:id',deleteElement);

export default productRoutes;