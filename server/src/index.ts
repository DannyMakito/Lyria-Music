import express from 'express';
import  "dotenv/config";
import "./db";
import authRouter from "./routers/auth";

const app = express();
// register middleware for comunication between server and postman
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/auth", authRouter);


const PORT = 8989;

app.listen(PORT,() => {
    console.log("Port is alive on :"+PORT);
})