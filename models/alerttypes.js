const mongoose = require('mongoose');


// create indicator schema & model
const AlertTypeSchema = new mongoose.Schema({
    name: {
        type: String
        },    
    startdate: {
        type: String        
    },
    enddate: {
        type: String        
    },
    severity: {
        type: String        
    },
    category: {
        type: String        
    }
});


module.exports = mongoose.model('AlertType',AlertTypeSchema);

