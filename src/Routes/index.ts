import express from "express";

const router = express.Router();

router.get("/", (request: express.Request, response: express.Response) => {
  return response.send("Hello world");
});

export default router;
