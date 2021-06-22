const mongoose = require('mongoose');


// create indicator schema & model
const ActivitiesSchema = new mongoose.Schema({
    name: {
        type: String
        },
    type: {
        type: String        
    },
    indicator: {
        type: String        
    },
    riskfactor: {
        type: Number        
    },
    successfactor: {
        type: Number        
    }
});


module.exports = mongoose.model('Activities',ActivitiesSchema);

