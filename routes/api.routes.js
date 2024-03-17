const express = require('express');
const router = express.Router();

const serviciocontroller = require('../controllers/serviciocontroller');

router.get('/servicioeventos', serviciocontroller.getservicioeventos);

module.exports = router;
