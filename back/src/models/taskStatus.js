const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({

    type: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

schema.plugin(mongoosePaginate);
mongoose.model('taskStatus', schema);