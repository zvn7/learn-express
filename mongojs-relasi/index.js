const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/relasi_db")
	.then(() => {
		console.log("Connection Successful");
	})
	.catch((e) => {
		console.log(e);
	});

const userSchema = new mongoose.Schema({
	name: String,
	addresses: [
		{
            _id: false,
			street: String,
			city: String,
			country: String,
		},
	],
});

const User = mongoose.model("User", userSchema);

// const makeUser = async () => {
// 	const user = new User({
// 		name: "John",
// 	});

// 	user.addresses.push({
// 		street: "123 Main St",
// 		city: "Anytown",
// 		country: "USA",
// 	});

//     const res = await user.save();
//     console.log(res);
// };

// makeUser()

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: "456 Main St",
        city: "Anytown",
        country: "JPN",
    });
    const res = await user.save();
    console.log(res);
}

addAddress("669dbfe580d99d704c72bb66")