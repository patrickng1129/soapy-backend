const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema({
  text: String,
  writtenBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const EventSchema = new mongoose.Schema({
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  eventName: String,
  completed: Boolean,
  memos: [MemoSchema],
});

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;
