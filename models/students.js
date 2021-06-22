const mongoose = require('mongoose');


// create students schema & model
const StudentsSchema = new mongoose.Schema({
    name: {
        type: String
        },
    email: {
        type: String        
    },
    advisor: {
        type: String        
    },
    classlevel: {
        type: Number        
    },
    enrollmentid: {
        type: Number        
    }
});


module.exports = mongoose.model('Students',StudentsSchema);

