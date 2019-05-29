var User = require("../models/user.model");

exports.getAll = (req, res) => {
  User.find((err, user) => {
    if (err) {
      return res.status(400).send({
        message: "Data Tidak Ditemukan" + err.message
      });
    }
    res.send(user);
  });
};

exports.getById = (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err){
      return res.status(400).send({
        message: "Username Tidak ditemukan " + err.message
      })
    } 
    res.send(user);
  });
};

exports.create = (req, res) => {
  var user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.name = req.body.name;
  user.email = req.body.email;

  user.save(err => {
    if (err) {
      return res.status(400).send({
        message: "Semua Data Harus diisi" + err.message
      });
    }
    res.json({
      message: "User Created",
      data: user
    });
  });
};

exports.update = (req, res) => {
  User.findOne({username: req.params.username}, (err, user) => {
    if (err) {
      return res.status(400).send({
        message: "Id Tidak Ditemukan" + err.message
      });
    }
    user.username = req.body.username;
    user.password = req.body.password;
    user.name = req.body.name;
    user.email = req.body.email;

    user.save(err => {
      if (err) {
        return res.status(400).seng({
          message: "Gagal mengganti data dengan username " + user.username,
          error: err.message
        });
      }
      res.json({
        message: "User Updated",
        Data: user
      });
    });
  });
};

exports.delete = (req, res) => {
  User.deleteOne(
    {
      username: req.params.username
    },
    (err, user) => {
      if (err) {
        return res.status(400).send({
          message: "username tidak ditemukan " + err.message
        });
      }
      res.json({
        message: "User Deleted"
      });
    }
  );
};
