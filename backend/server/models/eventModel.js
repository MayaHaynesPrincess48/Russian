const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    location: {
        type: String,
        require:true
    },
    selDate:{
        type:String,
        require:true
    }
}, {
    timestamps: true
}
);

const Event = mongoose.model("Event", eventSchema);

module.exports= Event;