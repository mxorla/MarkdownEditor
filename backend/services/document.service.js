const redisService = require('./redis.service')
const uuidv1 = require('uuid/v1');

class DocumentService {

    async post(title, markdown) {
        try {
            const id = uuidv1();
            const document = {id, title, markdown, status: "NEW", timestamp: Date.now()}
            redisService.set(id, document);
            return document;
        } catch (error) {
            throw error;
        }
    }

    async put(id, title, markdown) {
        try {
            const response = await redisService.set(id, {id, title, markdown, status: "EDITED", timestamp:Date.now()});
            return response;
        } catch (error) {
           throw error;
        }
    }

    async get(key) {
        try {
            const response = await redisService.get(key);
            return response;
        } catch (error) {
           throw error;
        }
    }

    async delete(key) {
        try {
            const response = await redisService.del(key);
            return response;
        } catch (error) {
           throw error;
        }
    }

    async getAll() {
        try {
            const response = await redisService.getAll();
            return response.sort(function(a,b){
                return b.timestamp - a.timestamp;
              });
        } catch (error) {
           throw error;
        }
    }

}

module.exports = new DocumentService;