const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/shopapp_db")
	.then(() => {
		console.log("Connection Successful");
	})
	.catch((e) => {
		console.log(e);
	});

const personSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
});

personSchema.virtual("fullName").get(function () {
	return `${this.firstName} ${this.lastName}`;
});

personSchema.pre("save", async function () {
    this.firstName = "Budi"
    this.lastName = "Doremi"
	console.log("Before Save");
});

personSchema.post("save", async function () {
	console.log("After Save");
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
	firstName: "Harry",
	lastName: "Potter",
});

console.log(person);

person
	.save()
	.then((result) => {
		console.log(result);
	})
	.catch((e) => {
		console.log(e);
	});
