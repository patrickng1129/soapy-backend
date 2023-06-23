import mongoose from "mongoose";

const Schema = mongoose.Schema;

const book = new Schema({
    author: String,
    title: String
})