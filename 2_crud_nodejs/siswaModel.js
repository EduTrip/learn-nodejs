let mongoose = require("mongoose");

let siswaSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  tanggalLahir: {
    type: String,
    required: true
  },
  jenisKelamin: String,
  hobi: String,
  created: {
    type: Date,
    default: Date.now
  }
});

var siswaModel = (module.exports = mongoose.model("Siswa", siswaSchema));

module.exports.get = function(callback, limit) {
  siswaModel.find(callback).limit(limit);
};
