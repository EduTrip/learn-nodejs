let router = require("express").Router();
let siswaController = require("./siswaController");

router.get("/", function(req, res) {
  res.json({
    status: "200",
    message: "express API"
  });
});

router
  .route("/siswas")
  .get(siswaController.getAll)
  .post(siswaController.add);

router
  .route("/siswa/:siswa_id")
  .get(siswaController.getId)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);

  module.exports = router;
