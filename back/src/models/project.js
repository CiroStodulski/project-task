const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    tasks: {
        type: Number,
        required: true
    }
    
});
schema.plugin(mongoosePaginate);
mongoose.model('project', schema);