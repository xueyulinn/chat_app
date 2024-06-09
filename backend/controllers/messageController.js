import messageModel from '../models/messageModel.js';
import conversationModel from '../models/conversationModel.js';


export const sendMessageController = async (req, res) => {
    try {
        const { receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.userId;

        const newMessage = new messageModel({
            sender: senderId,
            receiver: receiverId,
            messageContent: message,
        });

        let conversation = await conversationModel.findOne({
            // it matches all the conditions
            members: { $all: [senderId, receiverId] },
        });

        if (conversation) {
            conversation.messages.push(newMessage._id);
        } else {
            conversation = new conversationModel({
                members: [senderId, receiverId],
                messages: [newMessage._id],
            });
        }

        Promise.all([newMessage.save(), conversation.save()]);

        res.status(200).json({ message: newMessage.messageContent });
    } catch (error) {
        console.error('Error in sendMessageController: ', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getMessagesController = async (req, res) => {
    try {
        const { receiverId } = req.params;
        const senderId = req.userId;

        const conversation = await conversationModel.findOne({
            members: { $all: [senderId, receiverId] },
        }).populate({
            path: 'messages',
        });

        if (!conversation) {
            return res.status(200).json({ messages: [] });
        }

        res.status(200).json({ messages: conversation.messages });

    } catch (error) {
        console.error('Error in getMessagesController: ', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};