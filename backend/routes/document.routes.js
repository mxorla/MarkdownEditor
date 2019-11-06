const express = require('express');
const documentController = require('../controllers/document.controller')

const router = new express.Router();
router
    .post('/api/document', documentController.post)
    .get('/api/document/:id', documentController.get)
    .delete('/api/document/:id', documentController.delete)
    .put('/api/document/:id', documentController.put)
    .get('/api/document', documentController.getAll)




module.exports = router;
