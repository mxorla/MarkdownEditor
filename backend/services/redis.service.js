

var redis = require('redis');
var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
class RedisService {
    constructor() {
        client.on('connect', function () {
            console.log('Redis connected');
        });
    }

    async set(key, value) {
        try {
            client.hset("documents", key, JSON.stringify(value));
        } catch (error) {
            throw error;
        }
    }


    async get(key) {
        try {
            return new Promise((resolve, reject) => {
                client.hget("documents", key, (err, value) => {
                    try {
                        if (err)
                            reject(err);
                        else
                            resolve(JSON.parse(value));

                    } catch (error) {
                        throw error;
                    }
                });
            });
        } catch (error) {
            throw error;
        }
    }

    async del(key){
        try {
            client.hdel("documents", key);
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            return new Promise((resolve, reject) => {
                client.hgetall("documents", (err, value) => {
                    try {
                        if (err)
                            reject(err);
                        else
                        if(value)
                            resolve(Object.values(value).map(obj=> {return JSON.parse(obj)}));
                            resolve([])

                    } catch (error) {
                        throw error;
                    }
                });
            });
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new RedisService;