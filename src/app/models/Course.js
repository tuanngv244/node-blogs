const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, default: '', required: true, maxLength: 255 },
        description: { type: String, default: '', maxLength: 3000 },
        image: { type: String, default: '', maxLength: 255 },
        slug: { type: String, default: '', maxLength: 255 },
        level: { type: String, default: '', maxLength: 255 },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
