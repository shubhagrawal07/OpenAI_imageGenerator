const router = require("express").Router();
const { generateImage } = require("../controllers/openaiController");

router.route("/generateImage").post(generateImage);

module.exports = router;
