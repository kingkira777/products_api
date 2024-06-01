import { Schema, model } from "mongoose";

interface IItem {
    name : string;
    price : number;
    description : string;
}

const ItemSchema = new Schema({
    name: String,
    price: Number,
    description: String,
});

export const ItemModel = model<IItem>('items', ItemSchema);