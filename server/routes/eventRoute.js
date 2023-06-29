const express = require("express");
const router = express.Router();
const {
  getEvents,
  createEvent,
  updateEvent,
} = require("../controllers/eventController");

router.post("/events", createEvent);
router.get("/events", getEvents);
router.put("/events/:id", updateEvent);

module.exports = router;
