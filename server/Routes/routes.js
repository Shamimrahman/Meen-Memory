const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  updateData,
  delData,
  likePost
} = require("../Controller/post");

router.post("/", postData);
router.get("/", getData);
router.patch("/:id", updateData);
router.delete("/:id", delData);
router.patch('/:id/likePost', likePost);


module.exports = router;
