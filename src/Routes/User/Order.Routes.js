const express = require('express');
const orderRoute = express.Router();

const {
    addNewOrder,
    getAllOrders,
    getOrder,
    deleteOrder
} = require('../../Controller/User/Order.controller');

orderRoute.post('/add-New-Order', addNewOrder);

orderRoute.get('/get-All-Order', getAllOrders);

orderRoute.get('/get-Order', getOrder);

orderRoute.delete('/delete-Order', deleteOrder);

module.exports = orderRoute;
