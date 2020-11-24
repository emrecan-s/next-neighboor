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