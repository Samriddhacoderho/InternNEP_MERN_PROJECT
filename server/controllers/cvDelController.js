import cv_model from "../schema/cvSchema.js";

const cv_del_controller = async (req, res) => {
  try {
    const result = await cv_model.deleteOne({
      _id:req.params.cvID,
      user: req.user.i_d,
    });
    if(!result.deletedCount)
    {
      return res.status(404).send("Some Error Occured")
    }
    else
    {
      return res.send("Deleted CV Successfully")
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default cv_del_controller;
