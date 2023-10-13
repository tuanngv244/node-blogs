const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, default: '', required: true, maxLength: 255 },
        description: { type: String, default: '', maxLength: 3000 },
        image: { type: String, default: '', maxLength: 255 },
        slug: {
            type: String,
            default: '',
            slug: 'name',
            unique: true,
            maxLength: 255,
        }, // slug generator by field 'name'
        level: { type: String, default: '', maxLength: 255 },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        deletedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
);

Course.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);
