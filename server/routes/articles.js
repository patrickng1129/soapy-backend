const express = require('express');
const router = express.Router();
const Article = require('../models/Articles')

router.post('/api/articles', async (req, res) => {
    const {title, content, author} = req.body

    const article = new Article({
        title: title,
        content: content,
        author: author
    })

    try {
        await article.save();
        res.status(201).send(article);
    } catch (err) {
        res.status(500).send(err)
    }
})


module.exports = router;