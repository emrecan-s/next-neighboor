require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
const mongoose = require('mongoose');
var multer = require('multer');
var upload = multer();
app.use(express.json());

// for parsing multipart/form-data
app.use(upload.array());


var mongoDB = `mongodb+srv://${process.env.DB_PASS}@cluster0.rgjkn.mongodb.net/neighbours?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

var db = mongoose.connection;
var collection = db.collection("neighbours_app");
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static(path.join(__dirname, 'build')));


//declare the data types
var DataSchema = mongoose.Schema({
	listing_url: String,
	property_type: String,
	nickname: String,
	summary: String,
	interaction: String,
	noise_level: Number,
	loud_tv_video: String,
	heavy_walkers: String,
	do_they_play_an_instrument: String,
	do_they_sing: String,
	do_they_have_loud_pets: String,
	do_they_have_loud_hobbies: String,
	are_the_walls_thin: String,
	is_outside_quiet: String,
	party: String,
	address: Object,
	date: Date

});

var Datamap = mongoose.model('Datamap', DataSchema, 'neighbours_app');

//add data
app.post("/add", function(req, res) {

//Refactoring the form data
	const finalData = {

		listing_url: `/listing/${JSON.parse(req.body.address).address_line1}`,
		property_type: req.body.property_type,
		nickname: req.body.nickname,
		summary: req.body.summary,
		interaction: req.body.interaction,
		noise_level: req.body.noise_level,
		loud_tv_video: req.body.loud_tv_video,
		heavy_walkers: req.body.heavy_walkers,
		do_they_play_an_instrument: req.body.do_they_play_an_instrument,
		do_they_sing: req.body.do_they_sing,
		do_they_have_loud_pets: req.body.do_they_have_loud_pets,
		do_they_have_loud_hobbies: req.body.do_they_have_loud_hobbies,
		are_the_walls_thin: req.body.are_the_walls_thin,
		is_outside_quiet: req.body.is_outside_quiet,
		party: req.body.party,
		address: JSON.parse(req.body.address),
		date: req.body.date

	}



	var doc = new Datamap(finalData);

	// save one model to database
	doc.save(function(err, book) {
		if (err) return console.error(err);
		res.send("done")
	});

});

//get all collection data
app.get('/data', function(req, res) {
	collection.find({}).toArray(function(err, data) {
		console.log(data)
		res.send(data)
	})

})




app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);