const mongoose = require('mongoose'); 

var subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    }
});

module.exports = mongoose.model('Subcategory', subCategorySchema);