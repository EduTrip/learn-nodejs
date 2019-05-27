Contact = require("./contact.model.js");

exports.getAll = (req, res) => {
  Contact.get((err, contacts) => {
    if (err) {
      res.status(400).send({
        message: err.message || "ada yang salah saat mengambil data contact"
      });
    }
    res.send(contacts);
  });
};

exports.getById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.status(400).send({
        message: err.message || "error"
      });
    }
    res.send(contact);
  });
};

exports.add = (req, res) => {
  var contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.email = req.body.email;
  contact.gender = req.body.gender;
  contact.phone = req.body.phone;

  contact.save(err => {
    if (err) {
      res.status(400).send({
        message: err.message || "error"
      });
    }
    res.send(contact);
  });
};

exports.update = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.status(400).send({
        message:
          err.message ||
          "Data tidak ditemukan dengan id " + req.params.contactId
      });
    }
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email;
    contact.gender = req.body.gender;
    contact.phone = req.body.phone;

    contact.save(err => {
      if (err) {
        res.status(400).send({
          message: err.message || "Form harus diisi semua"
        });
      }
      res.send({
        message: "Updated Succesfully",
        contact
      });
    });
  });
};

exports.delete = (req, res) => {
  Contact.remove({
    _id: req.params.contactId
  }, (err) => {
    if(err) {
      res.status(400).send({
        message: err.message || "gagal meenghappus"
      })
    }
    res.send({
      message: "Berhasil Dihapus"
    })
  })
}
