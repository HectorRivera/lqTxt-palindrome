const morgan  = require('morgan');
const express = require('express');
const helmet  = require('helmet');

const logger  = require('./middleware/logger');
const auth    = require('./middleware/auth');
const home    = require('./routes/home');

const PORT    = process.env.PORT || 5000;

//CORS
//var cors = require('cors');
const app     = express();
//app.use(cors());
//DB Connection
var mongo = require('mongodb');
var monk = require('monk');
const URI   = process.env.MONGODB_URI;
var db = monk(URI);

//Security
app.use(helmet());

//Logging
app.use(morgan('tiny'));

//Encoding Body into the req.body object
app.use(express.json());

// Encoding x-form-urlencode keys:value pairs
app.use(express.urlencoded({ extended: true }));

//Statc Assets
app.use(express.static('public'));

//Custom Middleware
app.use(logger);
app.use(auth);

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
//set view Engine for EJS
app.set('view engine', 'ejs');

//Routes
app.use('/',home);
//app.use('/api/courses/', courses);
//print dir path
console.log(__dirname);
//const port = process.env.port || 5000;
app.listen(PORT,()=> console.log(`Listening on port ${PORT}`))
