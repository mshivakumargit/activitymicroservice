const express = require('express');
const router = express.Router();
const Indicator = require('../models/indicators')

// get a list of indicators from the database
router.get('/',function(req,res,next){
    Indicator.find({}).then(function(indicators){
        res.send(indicators);
    }).catch(next);
});

// get a indicator in the database
router.get('/:id',function(req,res,next){
    Indicator.findOne({_id: req.params.id}).then(function(indicator){
        res.send(indicator);
    }).catch(next);
});

// add a new indicator to database
router.post('/',function(req,res,next){
    Indicator.create(req.body).then(function(indicators){
        res.send(indicators);
    }).catch(next);
});

// update a indicator in the database
router.put('/:id',function(req,res,next){
    Indicator.findOneAndUpdate({_id: req.params.id},req.body).then(function(indicator){
        Indicator.findOne({_id: req.params.id}).then(function(indicator){
            res.send(indicator);
        });
    });
});

// delete a indicator in the database
router.delete('/:id',function(req,res,next){
    Indicator.findOneAndDelete({_id: req.params.id}).then(function(indicator){
        res.send(indicator);
    });
});


module.exports = router