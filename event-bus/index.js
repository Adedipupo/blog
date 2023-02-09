const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/event', (req, res){
    const event = req.body

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    res.status({ status : "OK"})
})

app.listen(4005, () => {
    console.log('Listening on 4005')
});
