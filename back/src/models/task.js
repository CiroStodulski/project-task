const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    status: {
        type: Object,
        required: true
    }
});

schema.plugin(mongoosePaginate);
mongoose.model('task', schema);