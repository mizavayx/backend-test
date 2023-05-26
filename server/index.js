const express = require("express");
const app = express();
const { connectDB } = require("./config/dbConnection");
const { notFound, errorHandler } = require("./errorHandle");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
connectDB();

// Routers


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening port ${PORT}`);
});