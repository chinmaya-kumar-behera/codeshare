const getCode = async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ msg: "url not woorking" });
}

const createCode = async (req, res) => {
    console.log("Create code called")
    const { id } = req.params;
    console.log(id)
};

module.exports = { getCode, createCode };