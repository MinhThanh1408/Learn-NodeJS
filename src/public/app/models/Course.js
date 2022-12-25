const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
mongoose.set('strictQuery', true);

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
}, {
    timestamps: true,
}, );
// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});

module.exports = mongoose.model('Course', Course, 'Courses');