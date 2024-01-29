"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("./db");
const app = (0, express_1.default)();
const PORT = 8989;
app.listen(PORT, () => {
    console.log("Port is alive on :" + PORT);
});
