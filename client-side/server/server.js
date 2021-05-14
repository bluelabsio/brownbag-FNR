const express = require('express');
const path = require('path');
const apiRouter = require('./routes/main');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('log-timestamp');
// Loading env vars to process.env 
require('dotenv').config();
process.env.API_ENDPOINT = `http://${process.env.DATA_SERVICE_NAME}:${process.env.DATA_SERVICE_PORT}/api`;

const app = express();

// A random key for signing the cookie
app.use(cookieParser(process.env.COOKIE_SECRET));
const PORT = process.env.PORT || 3001;
//Middlewares
app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(session({
  name: 'BB051321',
  saveUninitialized: false,
  resave: false,
  cookie: {
    sameSite: true,
    secure: true
  },
  secret: process.env.SESSION_SECRET
}));

app.use('/api', apiRouter);

/*************************************************** */
/**** THIS IS TO RUN THE REACT APP IN THE SERVER ****/
/*************************************************** */
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
/*************************************************** */

app.listen(PORT, () => console.log(`Listening on ${PORT}`));




