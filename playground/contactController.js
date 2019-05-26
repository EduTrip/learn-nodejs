let Contact = require("./contactModel");

//handle get all contacts request
exports.index = function(req, res) {
  Contact.get(function(err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Contacts success retrieved",
      data: contacts
    });
  });
};

//handle get contact by id
exports.view = function(req, res) {
  Contact.findById(req.params.contact_id, function(err, contact) {
    if (err) res.send(err);
    res.json({
      message: "Contact detail",
      data: contact
    });
  });
};

//handle create new contact
exports.new = function(req, res) {
  let contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.email = req.body.email;
  contact.gender = req.body.gender;
  contact.phone = req.body.phone;

  contact.save(function(err) {
    //error handling
    if (err) res.json(err);

    res.json({
      message: "successful create new contact",
      data: contact
    });
  });
};

//handle update contact
exports.update = function(req, res) {
  Contact.findById(req.params.contact_id, function(err, contact) {
    if (err) res.send(err);
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email;
    contact.gender = req.body.gender;
    contact.phone = req.body.phone;

    contact.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "contact updated",
        data: contact
      });
    });
  });
};

//handle delete contact
exports.delete = function(req, res) {
  Contact.remove(
    {
      _id: req.params.contact_id
    },
    function(err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "contact deleted"
      });
    }
  );
};
