const express = require('express');

const app = express();



app.get('/api', (req, res) => {
    res.json({"users": ['user1', 'user2', 'user3']});
});

app.listen(5070, () => {
    console.log("Server stated on port 5070");
});