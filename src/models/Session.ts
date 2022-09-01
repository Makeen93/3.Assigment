import { Schema, model } from "mongoose";
import { ISession } from "../types/interfaces";
const SessionSchema = new Schema<ISession>({
    sessionType: { type: String, required: true },
    serviceProviderID: { type: String, required: true },
    clientsIDs: [{ type: String, required: true }],
    name: { type: String, required: true },
    details: { type: String, required: true },
    startDate: { type: Date, required: true },
    duration: { type: Number, required: true },
    serviceType: { type: String, required: true },
    location: { type: String, required: true },
    attachments: { type: String, required: true },
    requierments: { type: String, required: true },
    ratings: [{ type: String, required: true }],
    reviews: [{ type: String, required: true }],
    sessionFee: { type: Number, required: true },
    payments: [{ type: String, required: true }],
    status: { type: String, required: true },
    doctorReferral: { type: String, required: true },
});


//Export model
module.exports = model<ISession>("Sessions", SessionSchema);