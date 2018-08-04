const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
});

schema.plugin(mongoosePaginate);
mongoose.model('task', schema);