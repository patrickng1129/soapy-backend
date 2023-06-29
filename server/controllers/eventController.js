const Event = require("../models/EventModel");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createEvent = async (req, res) => {
  const { eventName, memos, completed, addedBy, action } = req.body;

  const event = new Event({
    eventName,
    memos,
    completed,
    addedBy,
    action,
  });

  try {
    await event.save();
    res.status(201).send(event);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
};
