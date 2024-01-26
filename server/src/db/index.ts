import mongoose from "mongoose";
import { MONGO_URI } from "#/utils/virable";

mongoose.connect(MONGO_URI).then(() => {
console.log("db is connected");

}).catch((err)=>{
    console.log("db failed",err)
})