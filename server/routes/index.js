const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("OK");
});

module.exports = router;
