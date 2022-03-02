const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const url = "https://www.theguardian.com/us";

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
		console.log(articles);
	})
	.catch((error) => console.log(error));

app.listen(PORT, () => console.log("the server is running on PORT 8000"));
