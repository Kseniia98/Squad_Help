const express = require('express');
const authRouter = require('./authRouter');
const contestRouter = require('./contestRouter');
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');

const router = express.Router();

router.use('/auth', authRouter);

router.use('/contest', contestRouter);

router.use('/user', userRouter);

router.use('/chat', chatRouter);

module.exports = router;
