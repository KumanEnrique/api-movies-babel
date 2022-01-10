import express from "express";
import consign from 'consign'
const app = express();

consign()
    .include("src/libs/middlewares.js")
    .then("src/routes/")
    .include("src/libs/boots.js")
    .into(app)