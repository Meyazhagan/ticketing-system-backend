const router = require("express").Router();

const getAllQuery = require("../services/query/getAllQuery");
const getQuery = require("../services/query/getQuery");
const createQuery = require("../services/query/createQuery");
const updateQuery = require("../services/query/updateQuery");
const deleteQuery = require("../services/query/deleteQuery");

const { validateBody, validateQuery, type } = require("../helper/joiSchema");
const { STUDENT } = require("../model/role");
const authorize = require("../permissions/authorize");

router.get("/", validateQuery(type.QUERY_PARAMS), getAllQuery);
router.get("/:id", getQuery);

router.post("/", authorize([STUDENT]), validateBody(type.QUERY), createQuery);
router.put("/:id", authorize([STUDENT]), validateBody(type.QUERY), updateQuery);
router.delete("/:id", authorize([STUDENT]), deleteQuery);

module.exports = router;
