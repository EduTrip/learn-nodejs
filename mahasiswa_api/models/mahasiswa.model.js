const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mahasiswa_schema = new Schema({
  nim: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  jurusan: String,
  semester: String,
  create_date: {
    type: Date,
    default: Date.now()
  }
});

var Mahasiswa = (module.exports = mongoose.model("mahasiswa", mahasiswa_schema));

