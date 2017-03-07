/**
 * user module handler.
 */
const UserModel = require('../../common/xmodel')('user');

class UserHandler {
    /**
     * user list.
     */
    list(conditions = {}) {
        return UserModel.list(conditions);
    }

    /**
     * user detail.
     */
    detail(_id) {
        return UserModel.detail(_id);
    }

    /**
     * user create.
     */
    create(newUser) {
        return UserModel.create(newUser);
    }

    /**
     * user update.
     */
    update(_id, newUser) {
        return UserModel.update(_id, newUser);
    }

}

module.exports = new UserHandler();