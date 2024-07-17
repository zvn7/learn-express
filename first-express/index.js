const express = require("express");
const app = express();

// app.use((req, res) => {
// 	console.log("we got request");
// 	res.send({
// 		message: "Hello, world",
// 	});
// });

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/cats", (req, res) => {
	res.send({
		name: "kitty",
	});
});

app.post("/cats", (req, res) => {
	res.send("Got a POST request");
});

app.get("/post/:judul", (req, res) => {
	const { judul } = req.params;
	res.send("Hello, " + judul);
});

app.get("/post/:category/:judul/:author", (req, res) => {
	const { category, judul, author } = req.params;
	res.send(
		`blog dengan category: ${category} dengan judul: ${judul} dan author: ${author}`
	);
});

app.get("/search", (req, res) => {
	// console.log(req.query);
	const { q } = req.query;
	if (!q) {
		res.send(`<h1>You didn't search for anything</h1>`);
	}
	res.send(`<h1>You searched for: ${q}</h1>`);
});

app.get("*", (req, res) => {
	res.send("Page not found");
});

app.listen(8080, () => {
	console.log("server running on http://localhost:8080");
});
