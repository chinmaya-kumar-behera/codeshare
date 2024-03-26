const anoCodes = require("./../models/anoCode");

const getCode = async (req, res) => {
  try {
    const { id } = req.params;
    const isAvailable = await anoCodes.findOne({ url: id });
    res.status(200).json({ data: isAvailable });
  } catch (error) {
    console.error("Error in getCode:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { setting, code } = req.body;

    let result;
    const isAvailable = await anoCodes.findOne({ url: id });

    if (isAvailable) {
      isAvailable.code = code;
      isAvailable.setting = setting;
      await isAvailable.save();
      result = isAvailable;
    } else {
      result = await anoCodes.create({ setting, code, url: id });
    }
    res.status(200).json({ msg: "code created successfully", data: result });
  } catch (error) {
    console.error("Error in createCode:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getCode, createCode };
