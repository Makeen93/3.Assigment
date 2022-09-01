import { Schema, model } from "mongoose";
import { IEmloyees } from "../types/interfaces";
const EmloyeesSchema = new Schema<IEmloyees>({
    uID: { type: String, required: true },
    roleID: { type: String, required: true },
    salary: { type: Number, required: true },
    attachments: [{ type: String, required: true }],
});


//Export model
module.exports = model<IEmloyees>("Emloyees", EmloyeesSchema);