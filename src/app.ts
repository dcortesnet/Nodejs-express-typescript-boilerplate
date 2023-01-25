import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
