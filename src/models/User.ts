import { Schema, model } from "mongoose";
import { IUsers } from "../types/interfaces";
const UsersSchema = new Schema<IUsers>({
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    profilePicture: { type: String, required: true },
    firstName: { type: String, required: true },
    lastNAme: { type: String, required: true },
    gender: { type: String, required: true },
    DOB: { type: Date, required: true },
    address: [{ type: String, required: true }],
    verified: { type: String, required: true },
    status: { type: String, required: true },
    accountType: { type: String, required: true },
    lastLoginDate: { type: Date, required: true },
    accountSettings: { type: String, required: true },
    languages: [{ type: String, required: true }],
    maritalStatus : { type: String, required: true },
});


//Export model
module.exports = model<IUsers>("Users", UsersSchema);