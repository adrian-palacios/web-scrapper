const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

app.listen(PORT, () => console.log("the server is running on PORT 8000"));
