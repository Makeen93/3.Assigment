import { Schema, model } from "mongoose";
import { IAlarm } from "../types/interfaces";
const AlarmSchema = new Schema<IAlarm>({
    name: { type: String, required: true },
    referenceType: { type: String, required: true },
    referenceID: { type: String, required: true },
    frequencyUnit: { type: String, required: true },
    frequency: { type: Number , required: true },
    active: { type: Boolean, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    
});


//Export model
module.exports = model<IAlarm>("Alarm", AlarmSchema);