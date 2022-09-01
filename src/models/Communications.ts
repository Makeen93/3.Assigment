import { Schema, model } from "mongoose";
import { ICommunications } from "../types/interfaces";
const CommunicationsSchema = new Schema<ICommunications>({
    referenceType: { type: String, required: true },
    referenceID: { type: String, required: true },
    partiesUIDs: [{ type: String, required: true }],
    lastUpdate: { type: Date, required: true },
    messages: [{ type: String, required: true }],
    deliveryDetails: [{ type: String, required: true }],
});


//Export model
module.exports = model<ICommunications>("Communications", CommunicationsSchema);