const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();
const whitelist = ['http://localhost:8080', 'http://localhost:51401']
var corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);

    // if (whitelist.indexOf(origin) !== -1) {
    //   callback(null, true)
    // } else {
    //   callback(new Error())
    // }
    callback(null, true)
  }
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
