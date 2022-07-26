const { Router } = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const userController = require('../controllers/userController');
const upload = require('../utils/fileUpload');
const checkToken = require('../middlewares/checkToken');

const userRouter = Router();
// path /user

userRouter.post(
  '/pay',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  userController.payment,
);

userRouter.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);

userRouter.get(
  '/getUser',
  checkToken.checkAuth,
);

userRouter.patch(
  '/updateUser',
  checkToken.checkToken,
  // update user validation
  upload.uploadAvatar,
  userController.updateUser,
);

userRouter.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout,
);

module.exports = userRouter;
