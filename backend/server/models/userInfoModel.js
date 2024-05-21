const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userInfoSchema = new mongoose.Schema({
    topic: {
        type: Array,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    file: {
        type: String,
        require:true
    },
    name: {
        type: String,
        require:true
    },
    telephone: {
        type: String,
        require:true
    },
    telegram: {
        type: String,
        require:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
}
);

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports= UserInfo;