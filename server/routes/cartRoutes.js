const router = require('express').Router()
const { protect, restrictTo } = require('../controllers/authControllers')
const { createCartController, updateCartController, deleteCartController, getUserCartController, getAllCartsController} = require('../controllers/cartControllers')

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')

// CREATE
router.post('/create', protect, verifyToken, createCartController )

// UPDATE
router.put('/update/:id', protect, restrictTo('admin', 'user'), verifyTokenAndAuthorization, updateCartController)

// DELETE
router.delete('/delete/:id', protect, restrictTo('admin', 'user'), verifyTokenAndAuthorization, deleteCartController)

// GET USER CART
router.get('/cart/:userId', protect, restrictTo('admin', 'user'), verifyTokenAndAuthorization, getUserCartController)

// GET ALL CARTS
router.get('/', protect, restrictTo('admin'), verifyTokenAndAdmin, getAllCartsController)


module.exports = router