const router = require("express").Router();
const userController = require("./controllers/user.controller");

router.get("/", (req, res) => {
  res.json({
    message: "User API"
  });
});

router
  .route("/users")
  .get(userController.getAll)
  .post(userController.create);
router
  .route("/users/:username")
  .get(userController.getById)
  .put(userController.update)
  .delete(userController.delete);

module.exports = router;
