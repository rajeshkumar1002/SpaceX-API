
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const crewSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive', 'retired', 'unknown'],
  },
  agency: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  wikipedia: {
    type: String,
    default: null,
  },
  launches: [{
    type: mongoose.ObjectId,
    ref: 'Launch',
  }],
});

crewSchema.plugin(mongoosePaginate);

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;