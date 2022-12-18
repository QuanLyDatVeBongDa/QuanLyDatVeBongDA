const express = require('express');
const router = express.Router();

const manageController = require('../app/Controllers/manageController');

router.get('/user', manageController.show);
router.delete('/deleteUser/:id', manageController.deleteUser);
router.get('/search', manageController.search);

module.exports = router;
