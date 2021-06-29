const postBlog = require("../Models/postData");
const mongoose = require("mongoose");

module.exports.postData = async (req, res) => {
  const { title, creator, message, selectedFile, tags } = req.body;
  const newpostBlog = new postBlog({
    title,
    creator,
    message,
    selectedFile,
    tags,
  });
  try {
    await newpostBlog.save();
    res.status(200).json({ msg: "Create Blog Post Successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Post Failed" });
  }
};

module.exports.getData = async (req, res) => {
  try {
    const getBlog = await postBlog.find();
    res.status(200).json(getBlog);
  } catch (error) {
    res.status(404).json({ msg: "Get Req failed" });
  }
};

module.exports.updateData = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send(`No post with id: ${id}`);
  } else {
    const updatePost = { title, creator, message, selectedFile, tags, _id: id };
    await postBlog.findByIdAndUpdate(id, updatePost, {
      new: true,
    });

    res.status(200).json({ msg: "Updated Successfully" });
  }
};

module.exports.delData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send(`No post with id: ${id}`);
  } else {
    await postBlog.findByIdAndDelete(id);
    res.status(200).json({ msg: "Blog Delete Successfully" });
  }
};

module.exports.likePost=async (req,res)=>{
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send(`No post with id: ${id}`);

  }

  else{
    const post=await postBlog.findById(id)
    const updatedPost=await postBlog.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
    res.json(updatedPost)
  }
}


