const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({

    name    : {
        type: String,
        required: true
    }

});

schema.plugin(mongoosePaginate);
mongoose.model('task-status', schema);

module.exports = schema;