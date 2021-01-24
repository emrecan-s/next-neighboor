require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());
app.options("*", cors());
const mongoose = require("mongoose");
var multer = require("multer");
var upload = multer();
app.use(express.json());
const axios = require("axios");

// for parsing multipart/form-data
app.use(upload.array());

var mongoDB = `mongodb+srv://${process.env.DB_PASS}@cluster0.rgjkn.mongodb.net/neighbours?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
var collectionN = db.collection("neighbours_app");
var collectionR = db.collection("routes");
db.on("error", console.error.bind(console, "connection error:"));

app.use(express.static(path.join(__dirname, "build")));

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
  date: Date,
});

var Datamap = mongoose.model("Datamap", DataSchema, "neighbours_app");

//add data
app.post("/add", async function (req, res) {
  const human = validateHuman(req.body.token);

  if (!human) {
    res.status(400);
    res.json({ erros: ["You are a bot"] });
    return;
  }

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
    date: req.body.date,
  };

  var doc = new Datamap(finalData);

  // save one model to database
  doc.save(function (err, book) {
    if (err) return console.error(err);
    res.status(200);
    res.json({ message: ["success"] });
  });

  async function validateHuman(token) {
    const secret = process.env.REACT_APP_CAPTCHA_SERVER;
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );
    const data = await response.json();
    return data.success;
  }
});

//get all collection data
app.get("/data", function (req, res) {
  try {
    collectionN.find({}).toArray(function (err, data) {
      res.send(data);
    });
  } catch {
    console.log(error);
    res.send(error);
  }
});

//get all state/city data
app.get("/us-states", function (req, res) {
  try {
    collectionR.find({}).toArray(function (err, data) {
      res.send(data);
    });
  } catch {
    console.log(error);
    res.send(error);
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/sitemap.xml", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "sitemap.xml"));
});

app.get("/listing", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/:state/:city?", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


// /states?state="Texas"
//get all state names
app.get("/get-places/state/full", function (req, res) {

  const clean = (s) => {

    if (typeof s !== 'string') return ''
    const cleaned= s.replace(/-/g, " ")
  const revClean =  cleaned.replace(/\b\w/g, l => l.toUpperCase())
 return  revClean.split("/")
  }

  finalPath = clean(req.query.validateQuery)
const state=finalPath[1]
const city =finalPath[2]

  if (!state) throw Error("No state");
  let query = { "State full": state};
  if (city) query["City"] = city;

  console.log(query)



  try {
    let states = collectionR.find(query).toArray(function (error, results) {
      
      res.send(results);
    });
  } catch {
    console.log(error);
    res.send(error);
  }
});


app.listen(process.env.PORT || 8080);
