import { parse } from "csv-parse";
import express, { Request, Response } from "express";
import fs from "fs";
import multer from "multer";
import os from "os";
import { HouseData, countUniqueHouses } from "~/domain";

const app = express();
const upload = multer({ dest: os.tmpdir() });

app.use(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    if (req.file === undefined) {
      return res.status(400).json({ error: "file field is empty!" });
    }

    const parser = fs
      .createReadStream(req.file.path)
      .pipe(parse({ columns: true }));

    const houses: HouseData[] = [];

    for await (const record of parser) {
      houses.push({ id: record.houseId, address: record.houseAddress });
    }

    res.json({ uniqueHouseCount: countUniqueHouses(houses) });
  }
);

export { app };
