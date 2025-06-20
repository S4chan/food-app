import express from "express";
import DbCon from "./Services/Database";
import App from "./Services/ExpressApp";
import { PORT } from "./Config";

const StartServer = async () => {
  const app = express();
  await DbCon();
  await App(app);

  // app.listen(PORT, () => {
  //   console.log(`Database connection from Port ${PORT}`);
  // });
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server listening on 0.0.0.0:${PORT}`);
  });
};

StartServer();
