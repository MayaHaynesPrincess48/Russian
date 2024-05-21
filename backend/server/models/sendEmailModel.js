const mongoose = require('mongoose');

const sendEmailSchema = new mongoose.Schema({
    fromEmail: {
        type: String,
        require: true,
    },
    toEmail: {
        type: String,
        require:true,
    },
    contents: {
        type: String,
        require:true
    }
}, {
    timestamps: true
}
);

const SendEmail = mongoose.model("SendEmail", sendEmailSchema);

module.exports= SendEmail;