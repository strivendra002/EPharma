const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        category: { type: String, required: true },
        imageUrl: { type: String, required: true },
    },
    { timestamps: true }
);

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
