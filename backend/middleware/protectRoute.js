import jwt from 'jsonwebtoken';

const protectRoute = (req, res, next) => {

    const userToken = req.cookies.token;

    if (!userToken) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    try {
        const decoded = jwt.verify(userToken, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({ message: 'Token rejected' });
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error('Error in protectRoute: ', error.message);
        return res.status(401).json({ message: 'Error while verifing token' });
    }

}

export default protectRoute