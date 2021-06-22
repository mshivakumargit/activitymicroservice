const mongoose = require('mongoose');


// create indicator schema & model
const ActivityTypesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
        
    }
});


module.exports = mongoose.model('ActivityTypes',ActivityTypesSchema);

