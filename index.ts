import { PrismaClient } from "@prisma/client";
const express = require("express");
import { Request, Response } from "express";

const app = express();
const prisma = new PrismaClient();
console.log("hi");

app.use(express.json());



// main()

app.get("/read", (req: Request, res: Response) => {
  (async function () {
    const readData = await prisma.todos.findMany();
    console.log(readData);
    res.json(readData)
  })()
});

app.post("/posts", (req: Request, res: Response) => {
  const { body } = req;
  console.log(body);
  res.send("post required to the  homepage");
  (async function () {
    const postData = await prisma.todos.create({
        data: {
            title: body.title,
            body: body.body,
        }
    });
  })();
});

app.listen("3000", () => {
  console.log("listening on port 3000");
});


