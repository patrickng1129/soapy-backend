const express = require("express");
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const eventRouter = require("./routes/eventRoute");
const checkPasswordRouter = require("./routes/checkPassword");

const app = express();
app.use(cors());
app.use(express.json());

// Connects to the MongoDB Atlas Cluster
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Could not connect to MongoDB Atlas"));

app.use("/api", eventRouter);
app.post("/api/check-password", checkPasswordRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
