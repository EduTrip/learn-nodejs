let router = require("express").Router();

router.get('/',function(req,res) {
    res.json({
        nama: "Bambang Brambang",
        TanggalLahir: "14 januari 1021",
        JenisKelamin : "non-binary",
        Hobi: "Gaming"
    })
})

module.exports = router;