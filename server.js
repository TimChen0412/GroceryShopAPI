const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const HTTP_PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API Listening"})
})

app.listen(HTTP_PORT, () => {
    console.log("Server listening on: ", HTTP_PORT)
})