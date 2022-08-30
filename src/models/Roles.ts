import { Schema, model } from "mongoose";
import { IRoles } from "../types/interfaces";
const RolesSchema = new Schema<IRoles>({
    name: { type: String, required: true },
    employees: [{ type: String, required: false }],
    users: [{ type: String, required: true }],
    service_providers: [{ type: String, required: true }],
    clients: [{ type: String, required: true }],
    sessions: [{ type: String, required: true }],
    communication: [{ type: String, required: true }],
    disputes: [{ type: String, required: true }],
    enum_values: [{ type: String, required: true }],
});


//Export model
module.exports = model<IRoles>("Roles", RolesSchema);