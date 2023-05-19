const express = require("express");
const app = express();

const dotenv = require("dotenv");
const { connectDB } = require("./config/dbConnection");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
connectDB();

app.listen(PORT, () => {
  console.log(`App is listening port ${PORT}`);
});
