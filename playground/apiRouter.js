//initialize express router
let router = require("express").Router();

let contactController = require("./contactController");

router.get("/", function(req, res) {
  res.json({
    status: 200,
    message: "using express api"
  });
});

router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
