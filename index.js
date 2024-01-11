const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

app.get('/:message', (req, res) => {
    res.send(req.params.message);
});

app.get('/encode/:message', (req, res) => {
    const encryptedText = Vigenere.Cipher('password').crypt(req.params.message);
    res.send(encryptedText);
});
app.get('/decode/:message', (req, res) => {
    const decryptedText = Vigenere.Decipher('password').crypt(req.params.message);
    res.send(decryptedText);
});

app.listen(port, () => {
    console.log('Server online on ' + port);
});