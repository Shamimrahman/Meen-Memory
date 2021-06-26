const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  updateData,
  delData,
} = require("../Controller/post");

router.post("/post", postData);
router.get("/get", getData);
router.patch("/:id", updateData);
router.delete("/:id", delData);

module.exports = router;
