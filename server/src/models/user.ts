// interface is abtract .... schema break inteface values into detailed object

import { Model, ObjectId, Schema, model } from "mongoose";

interface UserDocument{
    name:  string;  //ts string  != js String
    email : string;
    password : string;
    verified: boolean;
    avatar?: {url: string; publicId: string }
    toekens : string[];
    favorites : ObjectId[];
    follower : ObjectId[];
    following : ObjectId[];

}

//we going to add all the value of interface inside schema by makining it  generic
const userSchema = new Schema<UserDocument>({
    name:{
        type: String, //js String
        required : true,
        trim: true,   
    },

   email:{
        type: String, 
        required : true,
        trim: true,  
        unique: true,
    },
    password:{
        type: String, 
        required : true,
    },

    avatar:{
        type: Object, 
        url : String,
        publicId: String,
    },
    
    verified :{
        type: Boolean,
        default: false
    },

    favorites: [{
        type : Schema.Types.ObjectId,
        ref: "Audio"
    }],

    follower: [{
        type : Schema.Types.ObjectId,
        ref: "User",

    }],

    following: [{
        type : Schema.Types.ObjectId,
        ref: "User",
    }],
    
    toekens: [String]

},{timestamps : true});

export default  model("User",userSchema) as Model<UserDocument>;