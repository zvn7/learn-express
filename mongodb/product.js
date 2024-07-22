const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/shopapp_db")
	.then(() => {
		console.log("Connection Successful");
	})
	.catch((e) => {
		console.log(e);
	});

const productsSchema = new mongoose.Schema({
	name: { type: String, required: true },
	brand: { type: String, required: true },
	price: { type: Number, required: true, min: 0 },
	color: { type: String, required: true },
	size: [{ type: String, required: true }],
	description: { type: String, required: true, maxLength: 200 },
	condition: { type: String, enum: ["New", "Used"], default: "New" },
	stock: { type: Number, required: true, min: [0, "Stock cannot be minus"] },
	availability: {
		online: { type: Boolean, required: true },
		offline: { type: Boolean, required: true },
	},
});

productsSchema.methods.outStock = function () {
	this.stock = 0;
	this.availability.online = false;
	this.availability.offline = false;
	return this.save();
};

productsSchema.statics.closeStore = function () {
	return this.updateMany(
		{},
		{
			stock: 0,
			"availability.online": false,
			"availability.offline": false,
		}
	);
};

const Products = mongoose.model("Products", productsSchema);

const changeStock = async (id) => {
	const foundProducts = await Products.findById(id);
	await foundProducts.outStock();
	console.log("done");
};

Products.closeStore().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

// changeStock("669bbfaddcb311646bcb4970");

// Products.findOneAndUpdate(
// 	{ name: "Kemeja Flanel" },
// 	{
// 		name: "Kemeja Flanel",
// 		brand: "Hollister",
// 		price: -750000,
// 		color: "biru muda",
// 		size: ["S", "M", "L"],
// 		description:
// 			"Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 		condition: "New",
// 		stock: -25,
// 		availability: {
// 			online: true,
// 			offline: true,
// 		},
// 	},
// 	{ new: true, runValidators: true }
// )
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e.errors.stock.properties.message);
// 	});

// const tshirt = new Products({
// 	name: "Kemeja Flanel",
// 	brand: "Hollister",
// 	price: 750000,
// 	color: "biru muda",
// 	size: ["S", "M", "L"],
// 	description:
// 		"Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 	condition: "New",
// 	stock: 25,
// 	availability: {
// 		online: true,
// 		offline: true,
// 	},
// });

// tshirt
// 	.save()
// 	.then((result) => {
// 		console.log("Data Inserted");
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});
