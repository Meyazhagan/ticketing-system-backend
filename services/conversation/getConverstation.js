const Converstation = require("../../model/converstation");

module.exports = (req, res, next) => {
    const converstation = Converstation.find({ users: { $in: [req.user?._id] } }).populate(
        "messagesId"
    );

    res.send({ success: { converstation } });
};
