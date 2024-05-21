const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
  const {title, description, location, selDate} = req.body;
  const event = await Event.create({title, description, location, selDate});
  if (event) {
    res.status(201).json({
        _id: event._id,
        title: event.title,
        description: event.description,
        location: event.location,
        selDate:event.selDate
    });
  } else {
    res.status(400).json({error:"Invalid event data"});
  }
};

const getEvents = async (req, res) => {
  const event = await Event.find({});
  res.status(200).json(event);
};

const getEventByID = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({error:"event not found"});
  }
};

module.exports= {createEvent, getEvents, getEventByID};
