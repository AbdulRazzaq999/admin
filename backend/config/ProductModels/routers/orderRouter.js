import express from 'express';

import AuthUser from '../../../middleware/auth.js';
import placeOrder from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place',AuthUser,placeOrder)

export default orderRouter