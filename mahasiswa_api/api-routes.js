const router = require("express").Router();
const mahasiswaController = require("./controllers/mahasiswa.controller");

router.get("/", (req, res) => {
  res.json({
    message: "Mahasiswa Api"
  });
});

router
  .route("/mahasiswa")
  .get(mahasiswaController.getAll)
  .post(mahasiswaController.create);

router
  .route("/mahasiswa/:mahasiswaId")
  .get(mahasiswaController.getById)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);

module.exports = router;
