const express = require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const commentsById = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsById[req.params.id] || []);
})

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

    const comments = commentsById[req.params.id] || [];

    comments.push({id: commentId, content});

    commentsById[req.params.id] = comments;

    res.status(201).send(comments);
})

const port = 4001;

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})