import { Schema, model } from "mongoose";
import { IEmployees } from "../types/interfaces";
const EmployeesSchema = new Schema<IEmployees>({
    uID: { type: String, required: true },
    roleID: { type: String, required: true },
    salary: { type: Number, required: true },
    attachments: [{ type: Object, required: true }],
});


//Export model
module.exports = model<IEmployees>("Employees", EmployeesSchema);