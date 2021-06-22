const mongoose = require('mongoose');


// create indicator schema & model
const AlertsSchema = new mongoose.Schema({
    alert: {
        type: String
        },
    studentid: {
        type: String        
    },
    notes: {
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


module.exports = mongoose.model('Alerts',AlertsSchema);

