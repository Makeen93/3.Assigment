import { Schema, model } from "mongoose";
import { IClients } from "../types/interfaces";
const ClientsSchema = new Schema<IClients>({
    uID: { type: String, required: true },
    preferredServiceType: [{ type: String, required: true }],
    diseases: { type: String, required: true },
    preferences: { type: String, required: true },
});


//Export model
module.exports = model<IClients>("Clients", ClientsSchema);