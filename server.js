require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
const mongoose = require('mongoose');


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
	listing_url: String,
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
	date:Date

});

var Datamap = mongoose.model('Datamap', DataSchema, 'neighbours_app');

//add data
app.post("/add", function(req, res) {
console.log(req.body)
var doc = new Datamap(req.body);

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

app.get('/ping', function(req, res) {
	return res.send('pong');
});



app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);