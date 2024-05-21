const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
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
    platform: {
        type: String,
        require:true
    },
    view: {
        type: Number,
        default:0
    },
    like: {
        type: Number,
        default:0
    },
    favourite: {
        type: Number,
        default: 0
    },
    selDate:{
        type:String,
        require:true
    }
}, {
    timestamps: true
}
);

const Publication = mongoose.model("Publication", publicationSchema);

module.exports= Publication;