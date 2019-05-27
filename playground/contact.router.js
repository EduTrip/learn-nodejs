//initialize express router
const router = require("express").Router();
const contactController = require("./contact.controller");

router.get("/", function(req, res) {
  res.json({
    status: 200,
    message: "using express api"
  });
});

router
  .route("/contacts")
  .get(contactController.getAll)
  .post(contactController.add);
router
  .route("/contacts/:contactId")
  .get(contactController.getById)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
