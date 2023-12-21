const express = require('express');
const app = express();
const measurementRoutes = require('./routes/measurementRoutes');
const PORT = 8080;
const cors = require("cors");
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(cors());

app.get('/', (_req, res) => {
    res.send('home');
})

app.use('/', measurementRoutes);

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})