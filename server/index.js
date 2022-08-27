const express = require("express");
const cors = require('cors');

const app = express();

require("dotenv").config();
app.use(express.json());

const { connection } = require("./Config/config");
const UserController = require("./Controllers/User.routes");
const Authentication = require("./Middlewares/Authentication");
const ProjectsController = require("./Controllers/Project.routes");
const clientsController = require("./Controllers/client.routes");


const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.enable('trust proxy');
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/user", UserController);
app.use("/project", Authentication, ProjectsController);
app.use("/client", Authentication, clientsController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("database connected!!");
  } catch (err) {
    console.log("error connecting database!!");
  }
  console.log("Listening on port " + process.env.PORT);
});
