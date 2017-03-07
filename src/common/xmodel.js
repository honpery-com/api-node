/**
 * xmodel.
 */
const mongoose = require('mongoose');
const { camelCase } = require('lodash');
const { root } = require('../../helpers');

class Xmodel {

    constructor(schemaName) {
        if (!(this instanceof Xmodel)) return new Xmodel(schemaName);

        this.$schema = require(root(`src/modules/${schemaName}/schema`));

        try {
            this.$model = mongoose.model(camelCase(schemaName), this.$schema);
        } catch (e) {
            this.$model = mongoose.model(camelCase(schemaName));
        }
    }

    list(conditions = {}) {
        return this.$model.find(conditions);
    }

    detail(_id, conditions = {}) {
        return this.$model.findById(_id);
    }

    create(newData = {}) {
        return new this.$model(newData).save();
    }

    update(_id, newData = {}) {
        return this.$model.findOneAndUpdate({ _id }, newData);
    }

    delete(_id) {
        return this.$model.findOneAndUpdate({ _id }, { delete: true });
    }

    remove(_id) {
        return this.$model.remove({ _id });
    }

}

module.exports = schemaName => new Xmodel(schemaName);