const { Router } = require('express');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkToken');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const upload = require('../utils/fileUpload');
const validators = require('../middlewares/validators');

const contestRouter = Router();
// path /contest

contestRouter.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest,
);

contestRouter.post(
  '/getCustomersContests',
  checkToken.checkToken,
  contestController.getCustomersContests,
);

contestRouter.get(
  '/getContestById',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);

contestRouter.post(
  '/getAllContests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests,
);

contestRouter.post(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

contestRouter.post(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);

contestRouter.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

contestRouter.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);


module.exports = contestRouter;
