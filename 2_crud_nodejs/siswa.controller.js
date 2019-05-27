const Siswa = require("./siswa.model.js");

exports.getAll = (req, res) => {
  Siswa.find((err, siswa) => {
    if (err) {
      return res.status(400).send({
        message: "Data Tidak Dapat ditemukan" + err.message
      });
    }
    res.send(siswa);
  });
};

exports.getById = (req, res) => {
  Siswa.findById(req.params.siswaId, (err, siswa) => {
    if (err) {
      return res.status(400).send({
        message: "Id Tidak Ditemukan" + err.message
      });
    }
    res.send(siswa);
  });
};

exports.create = (req, res) => {
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggalLahir = req.body.tanggalLahir;
  siswa.jenisKelamin = req.body.jenisKelamin;
  siswa.hobi = req.body.hobi;

  siswa.save(err => {
    if (err) {
      return res.status(400).send({
        message: "Data harus diisi" + err.message
      });
    }
    res.send(siswa);
  });
};

exports.update = (req, res) => {
  Siswa.findById(req.params.siswaId, (err, siswa) => {
    if (err) {
      return res.status(400).send({
        message: "Id tidak ditemukan" + err.message
      });
    }
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggalLahir = req.body.tanggalLahir;
    siswa.jenisKelamin = req.body.jenisKelamin;
    siswa.hobi = req.body.hobi;

    siswa.save(err => {
      if (err) {
        return res.status(400).send({
          message: "Data harus diisi" + err.message
        });
      }
      res.send(siswa);
    });
  });
};

exports.delete = (req, res) => {
  Siswa.deleteOne(
    {
      _id: req.params.siswaId
    },
    err => {
      if (err) {
        res.status(400).send({
          message: "id tidak ditemukan " + err.message
        });
      }
      res.send({
        message: "berhasil dihapus"
      });
    }
  );
};
