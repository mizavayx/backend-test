const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

const dotenv = require('dotenv');
const db = require('./config/dbConnection');
const cors = require('cors');

dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`App is listening port ${PORT}`);
});
