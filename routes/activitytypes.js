const express = require('express');
const router = express.Router();
const ActivityType = require('../models/activitytypes')

// get a list of indicators from the database
router.get('/',function(req,res,next){
    ActivityType.find({}).then(function(records){
        res.send(records);
    }).catch(next);
});

// get a indicator in the database
router.get('/:id',function(req,res,next){
    ActivityType.findOne({_id: req.params.id}).then(function(record){
        res.send(record);
    }).catch(next);
});

// add a new indicator to database
router.post('/',function(req,res,next){
    ActivityType.create(req.body).then(function(record){
        res.send(record);
    }).catch(next);
});

// update a indicator in the database
router.put('/:id',function(req,res,next){
    ActivityType.findOneAndUpdate({_id: req.params.id},req.body).then(function(record){
        ActivityType.findOne({_id: req.params.id}).then(function(record){
            res.send(record);
        });
    });
});

// delete a indicator in the database
router.delete('/:id',function(req,res,next){
    ActivityType.findOneAndDelete({_id: req.params.id}).then(function(record){
        res.send(record);
    });
});


module.exports = router