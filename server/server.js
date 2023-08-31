const express = require("express"); // Express Framework
const bodyParser = require("body-parser"); // NodeJs body parsing middleware
const router = express.Router(); // New Router Object

const EXE = require("./misc/functions");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "public"));

app.get('/', (req, res) => {
  return res.status(200).json({
   "its-money": "Support the project on => x.com/kyonax_on_tech 💀"
  });
});

app.use("/", router);

var server = app.listen(process.env.PORT, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(`REST API "its-money-server" listening at http://%s:%s`, host, port);
})
