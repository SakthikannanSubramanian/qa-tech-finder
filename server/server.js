const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

const completeData = require("./data/complete-data");

app.use(cors());
app.use(express.json());

app.get('/api/v1/data', (req, res) => {
    res.json(completeData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
