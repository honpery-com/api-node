/**
 * 密码 表结构
 */
import mongoose from 'mongoose';

export default {

    // 关联实体id
    link_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    // 密文
    password: {
        type: String,
        required: true
    },

    // 创建时间
    create_time: {
        type: Date,
        default: Date.now
    },

    // 更新时间
    update_time: {
        type: Date,
        default: Date.now
    },

    // 软删除
    deleted: {
        type: Boolean,
        default: false
    }

};