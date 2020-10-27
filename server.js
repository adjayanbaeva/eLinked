const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const app = express();

//Body parser configuration
app.use(body-parser.urlencoded({extended: false}));
app.use(bodyparser.json());

//Db config
const db = require("./config/keys").mongoURI;

//Coneect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('Mongodb connected'))
  .catch((err) => console.log(err));


//First route
app.get('/', (req, res) => res.send('Hello!'));

//Use all routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));