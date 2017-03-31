/**
 * app config.
 */
module.exports = {
    dev: {
        port: 7001
    },
    prod: {
        port: 7002
    },
    test: {
        port: 7003
    },
    db: {
        host: '127.0.0.1',
        port: 27017,
        name: 'honpery_com'
    },
    security: {
        mix: 'asdadadadasd',
        secret: 'honpery_com',
        algorithm: 'HS256'
    }
}