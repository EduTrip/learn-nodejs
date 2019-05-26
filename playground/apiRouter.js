//initialize express router
var router = require("express").Router();

router.get("/", function(req, res) {
  res.json({
    status: 301,
    message: "using express api",
  });
});

module.exports = router;
