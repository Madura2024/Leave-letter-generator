const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for letters (can be replaced with DB)
let savedLetters = [];

app.get('/api/letters', (req, res) => {
    res.json(savedLetters);
});

app.post('/api/generate', (req, res) => {
    const { mode, data, content } = req.body;

    const newLetter = {
        id: Date.now(),
        mode,
        data,
        content,
        createdAt: new Date()
    };

    savedLetters.push(newLetter);
    res.status(201).json({ message: 'Letter saved successfully', letter: newLetter });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
