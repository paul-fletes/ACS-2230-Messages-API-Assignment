const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.

const a24Schema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  yearRelease: { type: Number, required: true },
  genre: { type: String, required: true },
  actor: { type: String, required: true },
});

const Movie = mongoose.model('Message', a24Schema)
module.exports = Movie