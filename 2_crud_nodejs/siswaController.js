let siswaModel = require("./siswaModel");

exports.getAll = function(req, res) {
  siswaModel.get(function(err, siswamodel) {
    if (err) res.json(err);

    res.json({
      status: "200",
      message: "Siswa Data Retrieved Successfully ",
      data: siswamodel
    });
  });
};

exports.getId = function(req, res) {
  siswaModel.findById(req.params.siswamodel_id, function(err, siswamodel) {
    if (err) res.json(err);

    res.json({
      message: "Siswa Data Loading ...",
      data: siswamodel
    });
  });
};

exports.add = function(req, res) {
  let siswamodel = new siswaModel();
  siswamodel.nama = req.body.nama ? req.body.nama : siswamodel.nama;
  siswamodel.tanggalLahir = req.body.tanggalLahir;
  siswamodel.jenisKelamin = req.body.jenisKelamin;
  siswamodel.hobi = req.body.hobi;

  siswamodel.save(function(err) {
    if (err) res.json(err);

    res.json({
      message: "succesfully create new siswa",
      data: siswamodel
    });
  });
};

exports.update = function(req, res) {
  siswaModel.findById(req.params.siswamodel_id, function(err, siswamodel) {
    if (err) res.json(err);
    siswamodel.name = req.body.name ? req.body.name : siswamodel.name;
    siswamodel.tanggalLahir = req.body.tanggalLahir;
    siswamodel.jenisKelamin = req.body.jenisKelamin;
    siswamodel.hobi = req.body.hobi;

    siswamodel.save(function(err) {
      if (err) res.json(err);

      res.json({
        message: "Data Update Succesfully",
        data: siswaModel
      });
    });
  });
};

exports.delete = function(req, res) {
  siswaModel.remove(
    {
      _id: req.params.siswamodel_id
    },
    function(err, siswamodel) {
      if (err) res.json(err);

      res.json({
        status: "200",
        message: "data deleted succesfully"
      });
    }
  );
};
