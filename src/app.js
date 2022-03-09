const feedDisplay = document.querySelector("#feed");

fetch("http://localhost:8000/info")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((article) => {
			const artileItem =
				`<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`;
			feedDisplay.insertAdjacentHTML("beforeend", artileItem);
		});
	})
	.catch((error) => console.log(error));
