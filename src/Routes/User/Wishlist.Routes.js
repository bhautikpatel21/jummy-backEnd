const express = require('express');
const WishlistRoutes = express.Router();

const { addNewWishlist,  deleteWishlist, getAllWishlist } = require('../../Controller/User/Wishlist.controller');

WishlistRoutes.post('/add-New-wishlist'  , addNewWishlist);

WishlistRoutes.get('/get-All-wishlist', getAllWishlist);

WishlistRoutes.delete('/delete-wishlist'  , deleteWishlist);

module.exports = WishlistRoutes;
