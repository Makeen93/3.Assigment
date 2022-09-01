import { Schema, model } from "mongoose";
import { IService_provider } from "../types/interfaces";
const Service_providerSchema = new Schema<IService_provider>({
    uId : { type: String, required: true },
    bio : { type: String, required: true },
    specialities : { type: String, required: true },
    preferredServiceType : { type: String, required: true },
    minSessionFee : { type: Number, required: true },
    maxSessionFee : { type: Number, required: true },
    documents : { type: String, required: true },
    reviewerUIDs : [{ type: String, required: true }],
    veriﬁcationStatus : { type: String, required: true },
    veriﬁcationDate : { type: Date, required: true },
    veriﬁedByUID : [{ type: String, required: true }],
});


//Export model
module.exports = model<IService_provider>("Service_provider", Service_providerSchema);