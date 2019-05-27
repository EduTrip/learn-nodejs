const mongoose = require("mongoose");

const siswaSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true
    },
    tanggalLahir: String,
    jenisKelamin: {
      type: String,
      required: true
    },
    hobi: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("siswa", siswaSchema);
