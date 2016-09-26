var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CampsiteSchema = new Schema({
  name: String,
  description: String,
  image: String
});

var Campsite = mongoose.model('Campsite', CampsiteSchema);

module.exports = Campsite;
