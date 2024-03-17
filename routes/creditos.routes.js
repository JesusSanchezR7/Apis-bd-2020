const express  = require('express');
const { postCreditos } = require('../controllers/creditos.controller');
const router = express.Router();

const creditoscontrollers = require('../controllers/creditos.controller');
// Metodos
// POST, GET, PUT, DELETE "CRUD"
// Definicion de las rutas
//La diagonal es la raiz de la ruta que nosotros vayamos a ejecutar.
router.get('/', creditoscontrollers.getCreditos);
router.put('/:id',creditoscontrollers.updateCreditos);
router.post('/',creditoscontrollers.postCreditos);
router.delete('/:id_creditos',creditoscontrollers.deleteCreditos);
router.get('/:id_creditos',creditoscontrollers.getCreditos);

module.exports = router;