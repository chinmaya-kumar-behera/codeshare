const codeModel = require("./../models/codeModel");

const getCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;
    const isAvailable = await codeModel.findOne({ url: id });
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
    const { setting, code, viewOnly, user} = req.body;

    let result;
    const isAvailable = await codeModel.findOne({ url: id });

    if (isAvailable) {
      isAvailable.code = code;
      isAvailable.setting = setting;
      isAvailable.viewOnly = viewOnly;
      if (user && !isAvailable.user) {
        isAvailable.user = user;
      }
      result = await isAvailable.save();
    } else {
      result = await codeModel.create({
        setting,
        code,
        url: id,
        user: user,
        viewOnly,
      });
    }
  
    res.status(200).json({ msg: "code created successfully", data: result });
  } catch (error) {
    console.error("Error in createCode:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCode, createCode };
