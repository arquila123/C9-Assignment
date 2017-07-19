var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var favoriteSchema = mongoose.Schema({
    name: String,
    latitude: String,
    longtitude: String,
    address: String,
    rating: String
});

module.exports = mongoose.model('Favorite',favoriteSchema);
