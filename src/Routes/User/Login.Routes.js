const express = require('express');
const userRoutes = express.Router();

const {
    registerUser,
    loginUser,
    getAllUser,
    getUser,
    updatePassword,
    updateUser,
    deleteUser,
    logOut

} = require('../../Controller/User/Login.controller');

userRoutes.post('/register',registerUser);

userRoutes.post('/login-user',loginUser);

userRoutes.get('/get-user',getUser);

userRoutes.get('/get-all-user',getAllUser);

userRoutes.put('/update-user',updateUser);

userRoutes.put('/update-password',updatePassword);

userRoutes.post('/delete-user',deleteUser);

userRoutes.post('/logout-user',logOut);

module.exports = userRoutes;
