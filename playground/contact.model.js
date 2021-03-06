const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    gender: String,
    phone: String
  },
  {
    timestamps: true
  }
);

var Contact = (module.exports = mongoose.model("contact", contactSchema));
module.exports.get = (callback, limit) => {
  Contact.find(callback).limit(limit);
};
