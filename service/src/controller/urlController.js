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

const updateExistingCode = () => {
  
}

const createCode = async (req, res) => {
  try {
    const { id } = req.params;
    const { setting, code, viewOnly, user } = req.body;
    
    const isAvailable = await codeModel.findOne({ url: id });
    // console.log('user is ', user == isAvailable.user);
    
    let result;

    if (isAvailable) {
      if (isAvailable?.user && isAvailable.viewOnly && user != isAvailable?.user) {
        return res
          .status(400)
          .json({ message: "you cannot write to a viewonly code snippet!" });
      }
    
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

const getCodes = async (req, res) => {
  console.log('getcodes controller called');

  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res.status(404).json({ Message: "Id not found!" });
    }
    const result = await codeModel.find({ user:id });

    res.status(200).json({ message: "fetched", data: result });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const deleteCode = async (req, res) => {
  console.log("delete codes controller called");

  try {
    const { id } = req.params;
    // console.log(id);
    if (!id) {
      return res.status(404).json({ Message: "Id not found!" });
    }
    const result = await codeModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted ", data: result });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getCode, createCode, getCodes, deleteCode };
