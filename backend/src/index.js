const express = require('express');
require('dotenv/config');
require('./config/db.js');
const { PORT } = require('./config/variables.js');
const routes = require('./routes/index.js');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/v1', routes);
const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${PORT}`);
});

module.exports = server;