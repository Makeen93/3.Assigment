import { Schema, model } from "mongoose";
import { IDispute } from "../types/interfaces";
const DisputeSchema = new Schema<IDispute>({ 
    sessionID: { type: String, required: true },
    ﬁrstPartyUID: { type: String, required: true },
    secondUID: { type: String, required: true },
    topic: { type: String, required: true },
    details: { type: String, required: true },
    attachments: [{ type: String, required: true }],
    status: { type: String, required: true },
    resolverUID: { type: String, required: true },
    inProgressDate: { type: Date, required: true },
    receivedDate: { type: Date, required: true },
    suspendedDate: { type: Date, required: true },
    closedDate: { type: Date, required: true },
});


//Export model
module.exports = model<IDispute>("Dispute", DisputeSchema);