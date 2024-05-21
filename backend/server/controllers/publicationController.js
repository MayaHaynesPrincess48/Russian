const Publication = require("../models/publicationModel");

const createPublication = async (req, res) => {
  const file = req.file.filename
  const { title, description, platform, view, like, favourite, selDate } = req.body;
  const publication = await Publication.create({title, description, file, platform, view, like, favourite, selDate});

  if (publication) {
    res.status(201).json({
        _id: publication._id,
        title: publication.title,
        description: publication.description,
        file: publication.file,
        platform: publication.platform,
        view: publication.view,
        like: publication.like,
        favourite: publication.favourite,
        selDate: publication.selDate,
    });
  } else {
    res.status(400).json({error:"Invalid publication data"});
  }
};

const getPublication = async (req, res) => {
  const publication = await Publication.find({});
  res.status(200).json(publication);
};

const getPublicationProfile = async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  
  if (publication) {
    res.status(200).json({
        _id: publication._id,
        title: publication.title,
        description: publication.description,
        file: publication.file,
        platform: publication.platform,
        view: publication.view,
        like: publication.like,
        favourite: publication.favourite
    });
  } else {
    res.status(404).json({error:"Publication not found"});
  }
};

const getPublicationByID = async (req, res) => {
  const publication = await Publication.findById(req.params.id);
  if (publication) {
    res.status(200).json(publication);
  } else {
    res.status(404).json({error:"Publication not found"});
  }
};

const views = async (req, res) => {
  const view = await Publication.findById(req.params.id);
  if (view) {
    view.view = view.view+1;
    const updateView = await view.save();
    res.status(200).json({
      view:updateView.view
    })
  } else {
    res.status(400).json({error:"view not found"});
  }

}

const like = async (req, res) => {
  const like = await Publication.findById(req.params.id);
  if (like) {
    like.like = like.like+1;
    const updateLike = await like.save();
    res.status(200).json({
      like:updateLike.like
    })
  } else {
    res.status(400).json({error:"like not found"});
  }

}

const unlike = async (req, res) => {
  const unlike = await Publication.findById(req.params.id);
  if (unlike) {
    unlike.like = unlike.like-1;
    const updateunLike = await unlike.save();
    res.status(200).json({
      unlike:updateunLike.like
    })
  } else {
    res.status(400).json({error:"like not found"});
  }

}

const favourite = async (req, res) => {
  const favourite = await Publication.findById(req.params.id);
  if (favourite) {
    favourite.favourite = favourite.favourite+1;
    const updatefavourite = await favourite.save();
    res.status(200).json({
      favourite:updatefavourite.favourite
    })
  } else {
    res.status(400).json({error:"favourite not found"});
  }

}

module.exports= {createPublication, getPublication, getPublicationByID, getPublicationProfile,views, like,unlike,favourite};
