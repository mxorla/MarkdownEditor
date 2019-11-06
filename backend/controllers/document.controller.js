const documentService = require('../services/document.service')

class DocumentController {

    async post(req, res) {
        try {
            const document = await documentService.post(req.body.title, req.body.markdown)
            res.json(document);
        } catch (error) {
            let errorResp = { success: false, message: error.message };
            res.status(400).json(errorResp);
        }
    }


    async delete(req, res) {
        try {
            const id = await documentService.delete(req.params.id)
            res.json({ success: true, id });
        } catch (error) {
            let errorResp = { success: false, message: error.message };
            res.status(400).json(errorResp);
        }
    }

    async put(req, res) {
        try {
            const markdown = await documentService.put(req.params.id, req.body.title, req.body.markdown)
            res.json({ success: true, markdown });
        } catch (error) {
            let errorResp = { success: false, message: error.message };
            res.status(400).json(errorResp);
        }
    }

    async get(req, res) {
        try {
            const markdown = await documentService.get(req.params.id)
            res.json({ success: true, markdown });
        } catch (error) {
            let errorResp = { success: false, message: error.message };
            res.status(400).json(errorResp);
        }
    }

    async getAll(req, res) {
        try {
            const documentCollection = await documentService.getAll()
            res.json(documentCollection);
        } catch (error) {
            let errorResp = { success: false, message: error.message };
            res.status(400).json(errorResp);
        }
    }
}

module.exports = new DocumentController

