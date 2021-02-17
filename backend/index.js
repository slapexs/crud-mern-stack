let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  dbConfig = require("./database/db");

//   Express Route
const studentRoute = require("../backend/routes/student.route");

// Connecting MongDB Davebase
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected successfully");
    },
    (error) => {
      console.log("---------------------------");
      console.error(`=> Could not connect to database  ${error}`);
      console.log("---------------------------");
    },
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use("/students", studentRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("---------------------------");
  console.log(`=> Listing to port: ${port}`);
  console.log("---------------------------");
});

// 404 error
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.status).send(err.message);
});
