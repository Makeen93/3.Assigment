import { Schema, model } from "mongoose";
import { IAnnouncements } from "../types/interfaces";
const AnnouncementsSchema = new Schema<IAnnouncements>({
    referenceType: { type: String, required: true },
    referenceID: { type: String, required: false },
    statues: { type: String, required: true },
    topic: { type: String, required: true },
    details: { type: String, required: true },
    sentDate: { type: Date, required: true },
    attachments: [{ type: String, required: true }],
    receiversUIDs: { type: String, required: true },
});


//Export model
module.exports = model<IAnnouncements>("Announcements", AnnouncementsSchema);