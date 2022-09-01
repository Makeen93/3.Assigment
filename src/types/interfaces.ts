import { PopulatedDoc, Document, Types } from "mongoose";
export interface IUsers {
  _id?: Types.ObjectId|String;
  email: string;
  phoneNumber: string;
  profilePicture: string;
  firstName: string;
  lastNAme: string;
  gender: "M"|"F";
  DOB: Date;
  address:String[];
  verified:"notSend"|"pending"|"verified";
  status:"inActive"|"active"|"suspended"|"lost"|"deleted";
  accountType:"PT"|"EM"|"PA";
  lastLoginDate:Date;
  accountSettings:String;
  languages:String[];
  maritalStatus:"married"|"single"|"divorced"|"widow";
}
export interface IEmloyees {
    _id?: Types.ObjectId|String;
    uID: string;
    roleID: string;
    salary: number;
    attachments:String[];
  }
  export interface IClients {
    _id?: Types.ObjectId|String;
    uID: string;
    preferredServiceType: string[]|"online"|"home"|"office";
    diseases: string;
    preferences:String;
  }export interface IService_provider {
    _id?: Types.ObjectId|String;
    uId: string;
    bio: string;
    specialities: string;
    preferredServiceType: string[]|"online"|"home"|"office";
    minSessionFee: number;
    maxSessionFee: number;
    documents:String;
    reviewerUIDs:string[];
    veriﬁcationStatus:"notSubmitted"|"pendingReview"|"inReview"|"veriﬁed"|"rejected";
    veriﬁcationDate:Date;
    veriﬁedByUID:string;
  }
  export interface ISession {
    _id?: Types.ObjectId|String;
    sessionType: string;
    serviceProviderID: string;
    clientsIDs: string[];
    name: string;
    details: string;
    startDate: Date ;
    duration: number;
    serviceType:"online"|"home"|"office";
    location:String;
    attachments:String;
    requierments:string;
    ratings:String[];
    reviews:String[];
    sessionFee:number;
    payments:String[];
    status:"initiated"|"agreed"|"canceled"|"ﬁnished";
    doctorReferral:string;
  }
  export interface IAnnouncements{
    _id?: Types.ObjectId|String;
    referenceType: "session"|"advertisment";
    referenceID:string|null;
    statues: "draft"|"puplished";
    topic: string;
    details: string;
    sentDate: Date ;
    attachments:String[];
    receiversUIDs:string;
  }
  export interface IAlarm{
    _id?: Types.ObjectId|String;
    name:string;
    referenceType: "agreements"|"session"|"disputes"|"sevice_providers";
    referenceID:string;
    frequencyUnit: "day"|"hours";
    frequency:number;
    active: boolean;
    startDate: Date ;
    endDate:Date;
  }
  export interface ICommunications{
    _id?: Types.ObjectId|String;
    referenceType: "session"|"agreements"|"disputes"|"users";
    referenceID:string;
    partiesUIDs: string[];
    lastUpdate: Date ;
    messages:String[];
    deliveryDetails:String[];
  }
  export interface INotifications{
    _id?: Types.ObjectId|String;
    referenceType: "session"|"agreements"|"disputes"|"alarm"|"announcements"|"users"|"communications";
    referenceID:string;
    statues:"sent"|"delivered"|"opened";
    title: string;
    details: string;
    sentDate:Date;
    receivedDate:Date;
    openDate:Date;
    receiverUID:Date;
  }
  export interface IEnum_values{
    _id?: Types.ObjectId|String;
    name:string;
    value:string[];
    note:string;
  }
  export interface IAgreements{
    _id?: Types.ObjectId|String;
    name:string;
    parties:string[];
    startDate:Date;
    endDate:Date;
    details:string;
    attachments:String[];
    reminder:boolean;
  }
  export interface IDispute{
    _id?: Types.ObjectId|String;
    sessionID:string;
    ﬁrstPartyUID:string;
    secondUID:string;
    topic:string;
    details:string;
    attachments:String[];
    status:"sent"|"received"|"in-progress"|"suspended"|"rejected"|"resolved";
    resolverUID:string;
    inProgressDate:Date;
    receivedDate:Date;
    suspendedDate:Date;
    closedDate:Date;
  }
  export interface IRoles{
    _id?: Types.ObjectId|String;
    name:string;
    employees?:string[]|IEmloyees[];
    users:string[];
    service_providers:string[];
    clients:string[];
    sessions:string[];
    communication:string[];
    disputes:string[];
    enum_values:string[];
  }