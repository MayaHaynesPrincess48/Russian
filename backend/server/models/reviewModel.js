const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
   type:{
        type:String
    },
    name: {
        type: String,
        require:true
    },
    position: {
        type: String,
        require:true
    },
    file: {
        type: String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
    
}, {
    timestamps: true
}
);

const Review = mongoose.model("Review", reviewSchema);

module.exports= Review;