const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tasks: {
        type: Array,
    }
});

schema.plugin(mongoosePaginate);
mongoose.model('project', schema);