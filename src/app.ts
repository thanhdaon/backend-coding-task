import express, { Request, Response } from "express";

const app = express();

app.use("/upload", (req: Request, res: Response) => {
  res.json({ uniqueHouseCount: 3 });
});

export { app };
