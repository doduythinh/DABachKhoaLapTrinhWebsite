const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tuan = require

const userSchema = mongoose.Schema({
    name: { type: String, required: true }
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Category_Product", userSchema)