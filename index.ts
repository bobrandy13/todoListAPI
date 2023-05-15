const express = require("express")
import {PrismaClient}

const app = express()

app.get("/read", () => {
    res.status(200)
})


app.listen("3000", () => {
    console.log("listening on port 3000")
})
