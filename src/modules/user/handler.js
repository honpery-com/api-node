/**
 * user module handler.
 */
const UserModel = require('../../common/xmodel')('user');
const PasswordHandler = require('../password/handler');

class UserHandler {

    list(conditions = {}) {
        return UserModel.list(conditions);
    }

    detail(_id) {
        return UserModel.detail(_id);
    }

    async create(newUser = {}) {
        // TODO: handler error.
        if (!newUser.password) return;

        const result = await UserModel.create(newUser);
        const password = await PasswordHandler.create(result._id, newUser.password);
        return result;
    }

    update(_id, newUser) {
        return UserModel.update(_id, newUser);
    }
}

module.exports = new UserHandler();