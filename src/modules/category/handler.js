/**
 * category module handler.
 */
const CategoryModel = require('../../common/xmodel')('category');

class CategoryHandler {
    list(conditions = {}) {
        return CategoryModel.list(conditions);
    }
    detail(category_id) {
        return CategoryModel.detail(category_id);
    }
    create(newCategory = {}) {
        return CategoryModel.create(newCategory);
    }
    update(category_id, newCategory = {}) {
        return CategoryModel.update(category_id, newCategory);
    }
    delete(category_id) {
        return CategoryModel.delete(category_id);
    }
}

module.exports = new CategoryHandler;