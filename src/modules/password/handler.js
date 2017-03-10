/**
 * password module handler.
 */
const PasswordModel = require('../../common/xmodel')('password');
const { md5 } = require('../../../helpers');
const { app } = require('../../../config');

class PasswordHandler {

    /**
     * create password.
     */
    create(user_id, password) {
        const cryotoPwd = md5(password + app.security.mix);
        return PasswordModel.create({ link_id: user_id, password: cryotoPwd });
    }

    /**
     * check password.
     */
    async check(user_id, password) {
        const cryotoPwd = md5(password + app.security.mix);
        let result = await PasswordModel.list({ link_id: user_id, password: cryotoPwd });
        return !!result.length;
    }
}

module.exports = new PasswordHandler();