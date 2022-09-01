import { Schema, model } from "mongoose";
import { IAgreements } from "../types/interfaces";
const AgreementsSchema = new Schema<IAgreements>({
    name: { type: String, required: true },
    parties: [{ type: String, required: true }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    details: { type: String, required: true },
    attachments: [{ type: String, required: true }],
    reminder: { type: Boolean , required: true },
});


//Export model
module.exports = model<IAgreements>("Agreements", AgreementsSchema);