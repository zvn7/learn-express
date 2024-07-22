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
	username: String,
	age: Number,
});

const tweetSchema = new mongoose.Schema({
	text: String,
	likes: Number,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

const User = mongoose.model("User", userSchema);

const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweet = async () => {
	const user = await User.findOne({
		username: "John",
	});
	const tweet = new Tweet({
		text: "Hello World 2",
		likes: 0,
	});

	tweet.user = user;
	tweet.save();
};

// makeTweet();

const showTweets = async () => {
	const tweets = await Tweet.findById("669dca031c668ba13031e342").populate(
		"user"
	);
	console.log(tweets);
};

showTweets();
