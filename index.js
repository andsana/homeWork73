const express = require('express');
const app = express();
const port = 8000;

app.get('/:message', (req, res) => {
    res.send(req.params.message);
});

app.listen(port, () => {
    console.log('Server online on ' + port);
});
