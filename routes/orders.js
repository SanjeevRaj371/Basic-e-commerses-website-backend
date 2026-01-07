import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderStatus,
  getMyOrders,
  getOrders,
  deleteOrder,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/me').get(protect, getMyOrders);
router
  .route('/:id')
  .get(protect, getOrderById)
  .put(protect, admin, updateOrderStatus)
  .delete(protect, admin, deleteOrder);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
