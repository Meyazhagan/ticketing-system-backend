const Converstation = require("../../model/converstation");

module.exports = (req, res, next) => {
    const id = req.params.id;
    const converstation = Converstation.findOne({
        _id: id,
        users: { $in: [req.user?._id] },
    }).populate("messagesId");

    res.send({ success: { converstation } });
};
