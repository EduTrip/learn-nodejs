const router = require("express").Router();
const siswaController = require("./siswa.controller.js");

router.get("/", (req, res) => {
  res.json({
    message: "Halo from API"
  });
});

router
  .route("/siswa")
  .get(siswaController.getAll)
  .post(siswaController.create);

router
  .route("/siswa/:siswaId")
  .get(siswaController.getById)
  .put(siswaController.update)
  .delete(siswaController.delete);
module.exports = router;
