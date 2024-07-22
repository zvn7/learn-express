const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/relasi_db")
	.then(() => {
		console.log("Connection Successful");
	})
	.catch((e) => {
		console.log(e);
	});

const productsSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true, min: 0 },
	season: {
		type: String,
		enum: ["Spring", "Summer", "Autumn", "Winter"],
	},
});

const farmSchema = new mongoose.Schema({
	name: String,
	city: String,
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Products",
		},
	],
});

const Farm = mongoose.model("Farm", farmSchema);

const Products = mongoose.model("Products", productsSchema);

// Products.insertMany([
// 	{ name: "Cotton", price: 100, season: "Summer" },
// 	{ name: "Wool", price: 200, season: "Winter" },
// 	{ name: "Silk", price: 300, season: "Spring" },
// 	{ name: "Polyester", price: 400, season: "Autumn" },
// 	{ name: "Cotton", price: 500, season: "Summer" },
// 	{ name: "Wool", price: 600, season: "Winter" },
// 	{ name: "Silk", price: 700, season: "Spring" },
// 	{ name: "Polyester", price: 800, season: "Autumn" },
// 	{ name: "Cotton", price: 900, season: "Summer" },
// 	{ name: "Wool", price: 1000, season: "Winter" },
// 	{ name: "Silk", price: 1100, season: "Spring" },
// 	{ name: "Polyester", price: 1200, season: "Autumn" },
// 	{ name: "Cotton", price: 1300, season: "Summer" },
// 	{ name: "Wool", price: 1400, season: "Winter" },
// 	{ name: "Silk", price: 1500, season: "Spring" },
// 	{ name: "Polyester", price: 1600, season: "Autumn" },
// 	{ name: "Cotton", price: 1700, season: "Summer" },
// 	{ name: "Wool", price: 1800, season: "Winter" },
// 	{ name: "Silk", price: 1900, season: "Spring" },
// 	{ name: "Polyester", price: 2000, season: "Autumn" },
// 	{ name: "Cotton", price: 2100, season: "Summer" },
// 	{ name: "Wool", price: 2200, season: "Winter" },
// 	{ name: "Silk", price: 2300, season: "Spring" },
// 	{ name: "Polyester", price: 2400, season: "Autumn" },
// ]);

// const makeFarm = async () => {
// 	const farm = new Farm({
// 		name: "Farm 1",
// 		city: "Jakarta",
// 	});

// 	const cotton = await Products.findOne({ name: "Cotton" });
// 	farm.products.push(cotton);
//     await farm.save();
// 	console.log(farm);
// };

// makeFarm();

// const addProduct = async (id) => {
// 	const farm = await Farm.findById(id);
// 	const Wool = await Products.findOne({ name: "Wool" });
// 	farm.products.push(Wool);
// 	await farm.save();
// 	console.log(farm);
// };

// addProduct("669dc440a4f8ec0787313f81");

Farm.findOne({ name: "Farm 1" })
	.populate("products")
	.then((farm) => {
		console.log(farm);
	});
