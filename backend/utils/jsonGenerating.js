import jwt from 'jsonwebtoken';
const genJson = async (res, userId) => {

    var token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie('token', token, {
        // sets the as true so cookie can not be accessed by js
        // such as document.cookie
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === 'production'
    });
}

export default genJson