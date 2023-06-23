const express = require('express');
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
require('dotenv').config();

const articlesRouter = require('./routes/articles')

const app = express();

app.use(express.json())

// Connects to the MongoDB Atlas Cluster
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log('Could not connect to MongoDB Atlas'))

app.post('/api/articles', articlesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})