const express = require("express");
const app = express();

const Agenda = require("agenda");
const Agendash = require("agendash");

const dbAddress = process.env.MONGODB_ADDRESS || "mongodb://mongo:27017/agenda";
const mount_path = process.env.MOUNT_PATH || "/";
const port = process.env.PORT || 3000;

const agenda = new Agenda({ db: { address: dbAddress } });

app.use(mount_path, Agendash(agenda));

app.listen(port, () =>
  console.log(
    `Started Agendash for ${dbAddress} mounted at ${mount_path}, port ${port}`
  )
);
