const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Meeting = new Schema({
    tittle: {
        type: String
    },
    description: {
        type: String
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    }
}, {
        collection: 'meetings'
    });

module.exports = mongoose.model('Meeting', Meeting);
