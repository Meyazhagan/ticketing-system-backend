const User = require("../../model/user");

module.exports = async (req, res, next) => {
    // query id
    // assigned to id
    const role = req.body.role;
    const userId = req.body.user;

    const user = await User.findById(userId);
    if (!user) return res.status(404).send({ error: "No User Found for given user ID" });

    user.role = role;

    await user.save();
    res.send({ success: { message: "Role Assigned" } });
};
