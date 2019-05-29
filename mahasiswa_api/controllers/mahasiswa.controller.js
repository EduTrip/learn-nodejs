const Mahasiswa = require("../models/mahasiswa.model");

exports.getAll = (req, res) => {
  Mahasiswa.find()
    .then(mahasiswa => {
      res.send({
        status: "success",
        message: "Data Mahasiswa Berhasil Didaptkan",
        data: mahasiswa
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "ada yang salah saat mengambil data" + err.message
      });
    });
};

exports.getById = (req, res) => {
  Mahasiswa.findById(req.params.mahasiswaId)
    .then(mahasiswa => {
      if (!mahasiswa) {
        return res.status(404).send({
          message:
            "Mahasiswa tidak ditemukan dengan id " + req.params.mahasiswaId
        });
      }
      res.send({
        message: "Mahasiswa Data Loading..",
        data: mahasiswa
      });
    })
    .catch(err => {
      if (err.kind == "ObjectId") {
        return res.status(400).send({
          message: "Mahasiswa TIdak ada dengan id " + req.params.mahasiswaId
        });
      }
      return res.status(500).send({
        message: "Ada Kesalahan" + err.message
      });
    });
};

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data Tidak boleh ada yang kosong " + err.message
    });
  }
  const mahasiswa = new Mahasiswa({
    nim: req.body.nim,
    nama: req.body.nama,
    jurusan: req.body.jurusan,
    semester: req.body.semester
  });

  mahasiswa
    .save()
    .then(Data => {
      res.send({
        message: "Mahasiswa Baru Terdaftar",
        data: Data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Terjadi Kesalahan"
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data Tidak Boleh Ada yang Kosong" + err.message
    });
  }

  Mahasiswa.findByIdAndUpdate(
    req.params.mahasiswaId,
    {
      nim: req.body.nim || " ",
      nama: req.body.nama,
      jurusan: req.body.jurusan,
      semester: req.body.semester
    },
    { new: true }
  )
    .then(mahasiswa => {
      if (!mahasiswa) {
        return res.status(404).send({
          message:
            err.message ||
            "Mahasiswa tidak ditemukan dengan id " + req.params.mahasiswaId
        });
      }
      res.send({
        message: "Mahasiswa Info Updated",
        data: mahasiswa
      });
    })
    .catch(err => {
      if (err.kind == "ObjectId") {
        res.status(404).send({
          message:
            err.message ||
            "Mahasiswa Tidak ada dengan id " + req.params.mahasiswaId
        });
      }
      return res.status(500).send({
        message: "Terjadi Kesalahan" + err.message
      });
    });
};

exports.delete = (req, res) => {
  Mahasiswa.findByIdAndRemove(req.params.mahasiswaId)
    .then(mahasiswa => {
      if (!mahasiswa) {
        return res.status(404).send({
          message:
            "Mahasiswa tidak Ditemukan dengan id " + req.params.mahasiswaId
        });
      }
      res.send({
        status: "success",
        message: "Mahasiswa deleted"
      });
    })
    .catch(err => {
      if (err.kind == "ObjectId") {
        return res.status(404).send({
          message:
            "Mahasiswa Tidak ditemukan dengan id " + req.params.mahasiswaId
        });
      }
      return res.status(500).send({
        message: "Terjadi Kesalahan" + err.message
      });
    });
};
