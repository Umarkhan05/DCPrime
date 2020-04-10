const express = require('express');
const mongoose = require('mongoose');
const app = express();

const user_route = require('./routes/user.route');


mongoose.connect("mongodb://localhost/MyProject",
{ useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind('MongoDb Connection Error'))




app.use(express.json());
app.use('/', user_route)


app.listen(3000, console.log('Server started at port 3000..'))