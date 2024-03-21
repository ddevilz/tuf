import express from "express";
import router from "./src/routes/routes.js";

let port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use("/api/v1", router);

app.get("/", (_req, res) => {
  return res.status(200).send("Hello world!");
});

app.all("*", (_req, res) => {
  return res.status(400).json({
    success: false,
    message: "Route not found",
  });
});
