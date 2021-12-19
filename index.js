require("dotenv").config();
require("express-async-errors");

const express = require("express");
const cors = require("cors");

const mongooseConnect = require("./shared/mongoose");

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");
const batchRouter = require("./routes/batch.routes");
const queryRouter = require("./routes/query.routes");
const assignRouter = require("./routes/assign.routes");
const unassignRouter = require("./routes/unassign.routes");
const converstationRouter = require("./routes/converstation.routes");

const errors = require("./middleware/errors");
const authUser = require("./middleware/authUser");

mongooseConnect();
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use("/api/batch", authUser, batchRouter);
app.use("/api/query", authUser, queryRouter);

app.use("/api/assign", authUser, assignRouter);
app.use("/api/unassign", authUser, unassignRouter);

app.use("/api/converstation", authUser, converstationRouter);

app.use(errors);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening to Port - ${PORT}`));
