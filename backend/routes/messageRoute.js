import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { sendMessageController, getMessagesController } from '../controllers/messageController.js';


const router = express.Router();

router.post('/sendMessage/:receiverId', protectRoute, sendMessageController);

router.get('/getMessage/:receiverId', protectRoute, getMessagesController);

export default router;