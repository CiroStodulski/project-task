const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({

    task: {
        type: Object,
        required: true
    },
    nome: {
        type: String,
        required: true
    }
});

schema.plugin(mongoosePaginate);
mongoose.model('taskStatus', schema);