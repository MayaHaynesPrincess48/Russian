const Review = require("../models/reviewModel");
const createReview = async (req, res) => {
  const file = req.file.filename
  const { type, name, position,content} = req.body;
  const review = await Review.create({type, file, name, position,content});
  if (review) {
    res.status(201).json({
        _id: review._id,
        type:review.type,
        file: review.file,
        name: review.name,
        position: review.position,
        content: review.content
    });
  } else {
    res.status(400).json({error:"Invalid review data"});
  }
};

const getReviews = async (req, res) => {
  const review = await Review.find({});
  res.status(200).json(review);
};

const getReviewByID = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).json({error:"review not found"});
  }
};

module.exports= {createReview, getReviews, getReviewByID};
