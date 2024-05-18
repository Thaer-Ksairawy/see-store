import express from "express";
import db from "./config/database.js";
import cors from "cors";
import  SiteRouter from "./routes/site-routes.js";
import productRoutes from "./routes/product-routes.js";
import  UserRoutes from "./routes/user-routes.js";
import { RegisterUser, UserLogIn } from "./controllers/user-controller.js";

const port = 5000 || process.env.PORT;
const app = express();

const allowedOrigins = [
  null,
  "http://localhost",
  "http://localhost:5502",
  "http://localhost:5500",
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "http://localhost:5000",
  "http://127.0.0.1:5000",
  "http://127.0.0.1:5502",
  "*",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "My CORS policy for this site does not allow access "
          // app.send("h1",msg,"</h1>")
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use("/", SiteRouter);

app.use(express.json());
app.use("/", productRoutes);
app.use("/", UserRoutes)



app.listen(port, () =>
  console.log(`Example app listening on port 5000!`),
);
