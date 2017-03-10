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
        host: '139.129.29.110',
        port: 2017,
        name: 'honpery_com'
    },
    security: {
        mix: 'asdadadadasd',
        secret: 'honpery_com',
        algorithm: 'HS256'
    }
}