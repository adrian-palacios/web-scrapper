const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const url = "https://www.theguardian.com/us";

app.get("/", (req, res) => {
	res.json("Welcome to my webscraper");
});

app.get("/info", (req, res) => {
	axios(url)
		.then((response) => {
			const html = response.data;
			// $ essentially uses all the html, similar to jquery
			const $ = cheerio.load(html);
			const articles = [];
			$(".fc-item__title", html).each(function () {
				const title = $(this).text();
				// a tag needed to get the correct href
				const url = $(this).find("a").attr("href");
				articles.push({ title, url });
			});
			res.json(articles);
		})
		.catch((error) => console.log(error));
});

app.listen(PORT, () => console.log("the server is running on PORT 8000"));
