const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/movie_db")
	.then(() => {
		console.log("Connection Successful");
	})
	.catch((e) => {
		console.log(e);
	});

const movieSchema = new mongoose.Schema({
	title: String,
	genre: String,
	director: String,
	year: Number,
	cast: Array,
	description: String,
	rating: Number,
	image: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// Movie.findByIdAndDelete("669b7d4ed8418a35c7a77e16").then((result) => {
// 	console.log(result);
// }).catch((e) => {
// 	console.log(e);
// });

// Movie.deleteOne({ title: "Black Panther" }).then((result) => {
// 	console.log(result);
// }).catch((e) => {
// 	console.log(e);
// });

// Movie.findByIdAndUpdate(
// 	"669b7d4ed8418a35c7a77e15",
// 	{ rating: 9.5 },
// 	{
// 		new: true,
// 	}
// )
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// Movie.updateOne({ title: "Avengers: Infinity War" }, { rating: 7.4 })
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// find movies by id
// Movie.findById("669b7d4ed8418a35c7a77e15")
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// find moview by year
// Movie.find({ year: { $gte: 2018 }, rating: { $gte: 8 } })
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// Movie.insertMany([
// 	{
// 		title: "Black Panther",
// 		genre: "Action",
// 		director: "Ryan Coogler",
// 		year: 2018,
// 		cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
// 		description:
// 			"T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
// 		rating: 7.3,
// 		image: "https://via.placeholder.com/300x300.png?text=Black+Panther",
// 	},
// 	{
// 		title: "Avengers: Infinity War",
// 		genre: "Action",
// 		director: "Anthony Russo, Joe Russo",
// 		year: 2018,
// 		cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
// 		description:
// 			"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
// 		rating: 8.4,
// 		image: "https://via.placeholder.com/300x300.png?text=Avengers+Infinity+War",
// 	},
// 	{
// 		title: "Joker",
// 		genre: "Crime",
// 		director: "Todd Phillips",
// 		year: 2019,
// 		cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
// 		description:
// 			"In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: 'The Joker'.",
// 		rating: 8.4,
// 		image: "https://via.placeholder.com/300x300.png?text=Joker",
// 	},
// 	{
// 		title: "Parasite",
// 		genre: "Drama",
// 		director: "Bong Joon Ho",
// 		year: 2019,
// 		cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
// 		description:
// 			"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
// 		rating: 8.6,
// 		image: "https://via.placeholder.com/300x300.png?text=Parasite",
// 	},
// 	{
// 		title: "Spider-Man: Into the Spider-Verse",
// 		genre: "Animation",
// 		director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
// 		year: 2018,
// 		cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
// 		description:
// 			"Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
// 		rating: 8.4,
// 		image:
// 			"https://via.placeholder.com/300x300.png?text=Spider-Man+Into+the+Spider-Verse",
// 	},
// ])
// 	.then((result) => {
// 		console.log("Data Inserted");
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// const movie = new Movie({
// 	title: "Inception",
// 	year: 2010,
// 	rating: 8.8,
// 	director: "Christopher Nolan",
// 	genre: "Action",
// });

// console.log(movie);
// movie.save()
