const express = require('express');
const router = express.Router();
const Students = require('../models/students')

// get a list of indicators from the database
router.get('/',function(req,res,next){
    Students.find({}).then(function(records){
        res.send(records);
    }).catch(next);
});

// get a indicator in the database
router.get('/:id',function(req,res,next){
    Students.findOne({_id: req.params.id}).then(function(record){
        res.send(record);
    }).catch(next);
});

// add a new indicator to database
router.post('/',function(req,res,next){
    Students.create(req.body).then(function(record){
        res.send(record);
    }).catch(next);
});

// update a indicator in the database
router.put('/:id',function(req,res,next){
    Students.findOneAndUpdate({_id: req.params.id},req.body).then(function(record){
        Students.findOne({_id: req.params.id}).then(function(record){
            res.send(record);
        });
    });
});

// delete a indicator in the database
router.delete('/:id',function(req,res,next){
    Students.findOneAndDelete({_id: req.params.id}).then(function(record){
        res.send(record);
    });
});


module.exports = router