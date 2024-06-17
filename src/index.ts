import express from "express";
import cors from "cors";
import http from "http";
import Alldata from "./Routes";
import bodyParser from "body-parser";
const app = express();
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(Alldata);

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port :${PORT}`);
});
