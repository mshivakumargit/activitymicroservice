const express = require('express');
const router = express.Router();
const AlertType = require('../models/alerttypes')

// get a list of indicators from the database
router.get('/',function(req,res,next){
    AlertType.find({}).then(function(records){
        res.send(records);
    }).catch(next);
});

// get a indicator in the database
router.get('/:id',function(req,res,next){
    AlertType.findOne({_id: req.params.id}).then(function(record){
        res.send(record);
    }).catch(next);
});

// add a new indicator to database
router.post('/',function(req,res,next){
    AlertType.create(req.body).then(function(record){
        res.send(record);
    }).catch(next);
});

// update a indicator in the database
router.put('/:id',function(req,res,next){
    AlertType.findOneAndUpdate({_id: req.params.id},req.body).then(function(record){
        Alerts.findOne({_id: req.params.id}).then(function(record){
            res.send(record);
        });
    });
});

// delete a indicator in the database
router.delete('/:id',function(req,res,next){
    AlertType.findOneAndDelete({_id: req.params.id}).then(function(record){
        res.send(record);
    });
});


module.exports = router