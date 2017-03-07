/**
 * password module handler.
 */
const { md5 } = require('../../../../helpers');
const PasswordModel = require('../../common/xmodel')('password');

class PasswordHandler {

    /**
     * create password.
     */
    create(user_id, password) {
        const cryotoPwd = md5(password);
        return PasswordModel.create({ link_id: user_id, password: cryotoPwd });
    }

    /**
     * check password.
     */
    async check(user_id, password) {
        const cryotoPwd = md5(password);
        let result = await PasswordModel.list({ link_id: user_id, password: cryotoPwd });
        return !!result.length;
    }
}

module.exports = new PasswordHandler();