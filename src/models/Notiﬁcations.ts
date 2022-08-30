import { Schema, model } from "mongoose";
import { INotiﬁcations } from "../types/interfaces";
const NotiﬁcationsSchema = new Schema<INotiﬁcations>({
    referenceType: { type: String, required: true },
    referenceID: { type: String, required: true },
    statues: { type: String, required: true },
    title: { type: String, required: true },
    details: { type: String, required: true },
    sentDate: { type: Date, required: true },
    receivedDate: { type: Date, required: true },
    openDate: { type: Date, required: true },
    receiverUID: { type: Date, required: true },
});


//Export model
module.exports = model<INotiﬁcations>("Notiﬁcations", NotiﬁcationsSchema);