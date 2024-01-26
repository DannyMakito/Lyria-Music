import express from 'express';
import  "dotenv/config";
import "./db";

const app = express();

const PORT = 8989;

app.listen(PORT,() => {
    console.log("Port is alive on :"+PORT);
})