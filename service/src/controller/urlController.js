const codeModel = require("./../models/codeModel");

const getCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;
    console.log("userId : ",userId);
    const isAvailable = await codeModel.findOne({ url: id });
    if (userId) {
      if (userId == isAvailable.user) {
        isAvailable.setting.isEditable = true;
      }
    }
    res.json({ data: isAvailable });
  } catch (error) {
    console.error("Error in getCode:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCode = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body)
    const { setting, code, isEditable, userId} = req.body;

    let result;
    const isAvailable = await codeModel.findOne({ url: id });

    if (isAvailable) {
      isAvailable.code = code;
      isAvailable.setting = setting;
      await isAvailable.save();
      result = isAvailable;
    } else {
      result = await codeModel.create({
        setting,
        code,
        url: id,
        user: userId,
      });
    }
    if (userId) {
      if (userId == result.user) {
        result.setting.isEditable = true;
      }
    }
    res.status(200).json({ msg: "code created successfully", data: result });
  } catch (error) {
    console.error("Error in createCode:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCode, createCode };
