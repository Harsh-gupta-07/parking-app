const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Live");
});

app.listen(process.env.PORT || 10000, () => {
    console.log(`Server started on port ${process.env.PORT || 10000}`);
});
