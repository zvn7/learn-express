const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
	{
		id: uuidv4(),
		username: "Joe",
		text: "First comment",
	},
	{
		id: uuidv4(),
		username: "Tim",
		text: "Second comment",
	},
	{
		id: uuidv4(),
		username: "Jane",
		text: "Third comment",
	},
	{
		id: uuidv4(),
		username: "John",
		text: "Fourth comment",
	},
	{
		id: uuidv4(),
		username: "Jim",
		text: "Fifth comment",
	},
];

app.get("/comments", (req, res) => {
	res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
	res.render("comments/new");
});

app.post("/comments", (req, res) => {
	const { username, text } = req.body;
	comments.push({ username, text, id: uuidv4() });
	res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
	const { id } = req.params;
	const newComment = req.body.text;
	const foundComment = comments.find((c) => c.id === id);
	foundComment.text = newComment;
	res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
	const { id } = req.params;
	comments = comments.filter((c) => c.id !== id);
	res.redirect("/comments");
});

// ----- //

app.get("/order", (req, res) => {
	res.send("GET order response");
});

app.post("/order", (req, res) => {
	const { id, item, price, qty } = req.body;
	res.send(`Item: ${item}, Price: ${price}, Qty: ${qty}`);
});

const port = 3000;
app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
