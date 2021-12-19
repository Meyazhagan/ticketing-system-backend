const { Query } = require("../../model/query");

module.exports = async function (req, res, next) {
    const { status, category, preferredLanguage } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (preferredLanguage) filter.preferredLanguage = preferredLanguage;

    const allQuery = await Query.find(filter).sort("-_id");

    const success = { query: allQuery };

    res.send({ success });
};
