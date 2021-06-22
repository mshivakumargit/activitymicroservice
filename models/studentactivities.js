const mongoose = require('mongoose');


// create students schema & model
const StudentActivitiesSchema = new mongoose.Schema({
    studentid: {
        type: String
        },
    action: {
        type: String        
    },
    type: {
        type: String        
    },
    indicator: {
        type: String        
    },
    activitydate: {
        type: Date,
        default: Date.now        
    }
});


module.exports = mongoose.model('StudentActivities',StudentActivitiesSchema);

