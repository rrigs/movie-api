const express = require("express"),
  morgan = require("morgan");

const bodyParser = require("body-parser"),
  methodOverride = require("method-override");

const app = express();

app.use(morgan("common"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use(express.static("public"));

let topMovies = [
  {
    title: "The Ritual",
    director: "David Bruckner",
    year: "2017",
  },
  {
    title: "A Quiet Place",
    director: "John Krasinski",
    year: "2018",
  },
  {
    title: "The Witch",
    director: "Robert Eggers",
    year: "2015",
  },
  {
    title: "Get Out",
    director: "Jordan Peele",
    year: "2017",
  },
  {
    title: "Secret Window",
    director: "David Koepp",
    year: "2004",
  },
  {
    title: "Alien",
    director: "Ridley Scott",
    year: "1979",
  },
  {
    title: "12 Monkeys",
    director: "Terry Gilliam",
    year: "1995",
  },
  {
    title: "It",
    director: "Andy Muschietti",
    year: "2017",
  },
  {
    title: "Knives Out",
    director: "Rian Johnson",
    year: "2019",
  },
  {
    title: "Doctor Sleep",
    director: "Mike Flanagan",
    year: "2019",
  },
];

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.get("/", (req, res) => {
  res.send("Welcome to my movie app!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
