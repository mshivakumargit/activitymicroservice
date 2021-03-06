const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// set up our express app
const app = express();
app.use(cors());

// connect to mongodb
mongoose.connect('mongodb://mongodbserver/activitysystemdb',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=> console.log("connection opened"));

app.use(express.static('public'));
app.use(express.json());

const indicatorsRouter = require('./routes/indicators');
app.use('/indicator',indicatorsRouter);

const activitytypeRouter = require('./routes/activitytypes');
app.use('/activitytype',activitytypeRouter);

const activitiesRouter = require('./routes/activities');
app.use('/activity',activitiesRouter);

const studentsRouter = require('./routes/students');
app.use('/student',studentsRouter);

const studentactivitiesRouter = require('./routes/studentactivities');
app.use('/studentactivity',studentactivitiesRouter);

const alerttypesRouter = require('./routes/alerttypes');
app.use('/alerttype',alerttypesRouter);

const alertsRouter = require('./routes/alerts');
app.use('/alert',alertsRouter);
// listen for requests
app.listen(process.env.port || 9090, ()=>
    console.log('Ready to Go!'));
