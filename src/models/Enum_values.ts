import { Schema, model } from "mongoose";
import { IEnum_values } from "../types/interfaces";
const Enum_valuesSchema = new Schema<IEnum_values>({
    name: { type: String, required: true },
    value: [{ type: String, required: true }],
    note: { type: String, required: true },
});


//Export model
module.exports = model<IEnum_values>("Enum_values", Enum_valuesSchema);