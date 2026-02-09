import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Needed for __dirname

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(express.static("client"));

app.get(/.*/, (req, res) => {
  console.log("catch all catched");
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.use((req, res, next) => {
  res.status(404).send("Nie znaleziono strony (404)");
});

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
