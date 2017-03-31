/**
 * article module handler.
 */
const ArticleModel = require('../../common/xmodel')('article');

class ArticleHandler {

    /**
     * list handler.
     */
    list(conditions = {}) {
        return ArticleModel.list(conditions);
    }

    /**
     * detail handler.
     */
    detail(article_id, conditions = {}) {
        return ArticleModel.detail(article_id, conditions);
    }

    /**
     * create handler.
     */
    create(newArticle) {
        return ArticleModel.create(newArticle);
    }

    /**
     * update handler.
     */
    update(article_id, newArticle) {
        return ArticleModel.update(article_id, newArticle);
    }

    /**
     * delete handler.
     */
    delete(article_id) {
        return ArticleModel.delete(article_id);
    }
}

module.exports = new ArticleHandler();