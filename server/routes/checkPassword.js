const express = require("express");
const router = express.Router();

router.post("/api/check-password", (req, res) => {
  const userPassword = req.body.password;

  if (userPassword === process.env.PASSWORD) {
    res.send("Correct");
  } else {
    res.send("Password is incorrect");
  }
});

module.exports = router;
