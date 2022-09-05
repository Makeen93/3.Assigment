import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import Agreements_routes from "./routes/AgreementsRoute";
import Alarm_routes from "./routes/AlarmRoute";
import Announcements_routes from "./routes/AnnouncementsRoute";
import Clients_routes from "./routes/ClientsRoute";
import Communications_routes from "./routes/CommunicationsRoute";
import Dispute_routes from "./routes/DisputeRoute";
import Employees_routes from "./routes/EmployeesRoute";
import Enum_values_routes from "./routes/Enum_valuesRoute";
import Notiﬁcations_routes from "./routes/NotificationsRoute";
import Roles_routes from "./routes/RolesRoute";
import Service_provider_routes from "./routes/Service_providerRoute";
import Session_routes from "./routes/SessionRoute";
import User_routes from "./routes/UserRoute";


dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const uri: string = process.env.DATABASE_URI ?? "";

mongoose.connect(uri).catch((err: any) =>
{ console.log(err);
throw Error(err);}
);

const connection = mongoose.connection;
connection.once("open", async () => {
  console.log("MongoDB database connection established successfully");


});
app.use(bodyParser.urlencoded({extended: false,}));
app.use(bodyParser.json());

app.use(morgan("tiny"));
app.use(express.static("public"));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server Ahmad yes');
});
//const Agreements_routes = require("./routes/AgreementsRoute");
// const Alarm_routes = require("./routes/AlarmRoute");
// const Announcements_routes = require("./routes/AnnouncementsRoute");
// const Clients_routes = require("./routes/ClientsRoute");
// const Communications_routes = require("./routes/CommunicationsRoute");
// const Dispute_routes = require("./routes/DisputeRoute");
// const Employees_routes = require("./routes/EmployeesRoute");
// const Enum_values_routes = require("./routes/Enum_valuesRoute");
// const Notiﬁcations_routes = require("./routes/NotificationsRoute");
// const Roles_routes = require("./routes/RolesRoute");
// const Service_provider_routes = require("./routes/Service_providerRoute");
// const Session_routes = require("./routes/SessionRoute");
// const User_routes = require("./routes/UserRoute");
  app.use("/Agreements", Agreements_routes);
  app.use("/Alarm", Alarm_routes);
  app.use("/Announcements", Announcements_routes);
  app.use("/Clients", Clients_routes);
  app.use("/Communications", Communications_routes);
  app.use("/Dispute", Dispute_routes);
  app.use("/Employees", Employees_routes);
  app.use("/Enum_values", Enum_values_routes);
  app.use("/Notifications", Notiﬁcations_routes);
  app.use("/Roles", Roles_routes);
  app.use("/Service_provider", Service_provider_routes);
  app.use("/Session", Session_routes);
  app.use("/Users", User_routes);

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});