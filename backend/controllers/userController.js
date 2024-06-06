import userModel from '../models/userModel.js';

export const getUsersController = async (req, res) => {
    try {
        const currentUser = req.userId;

        const users = await userModel.find({ _id: { $ne: currentUser } }).select('-passWord');

        res.status(200).json(users);

    } catch (error) {
        console.error('Error in userController: ', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};