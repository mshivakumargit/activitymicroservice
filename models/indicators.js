const mongoose = require('mongoose');


// create indicator schema & model
const IndicatorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
        
    }
});


module.exports = mongoose.model('Indicator',IndicatorSchema);

