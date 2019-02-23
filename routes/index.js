var express = require("express");
var router = express.Router();
let fs = require("fs");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("../views/view.jade");
});

module.exports = router;
