/**
 * tag module handler.
 */
const TagModel = require('../../common/xmodel')('tag');

class TagHandler {

    list(conditions = {}) {
        return TagModel.list(conditions);
    }

    detail(tag_id) {
        return TagModel.detail(tag_id);
    }

    create(new_tag) {
        return TagModel.create(new_tag);
    }

    update(tag_id, new_tag) {
        return TagModel.update(tag_id, new_tag);
    }

    delete(tag_id) {
        return TagModel.delete(tag_id);
    }

}

module.exports = new TagHandler();