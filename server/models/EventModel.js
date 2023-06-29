const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema({
  text: String,
  writtenBy: String,
});

const EventSchema = new mongoose.Schema({
  addedBy: String,
  eventName: String,
  action: String,
  completed: Boolean,
  memos: MemoSchema,
});

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;
