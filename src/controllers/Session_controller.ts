import { Request, Response } from "express";

const SessionsModel = require("../models/Session");


exports.sessions_list = (req: Request, res: Response) => {
    SessionsModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.sessions_detail = (req: Request, res: Response) => {
    SessionsModel.findById(req.params._id)
    .then((Sessions: any) => res.json(Sessions))
    .catch((err: any) => res.status(400).json(err));
};


exports.sessions_create_post = (req: any, res: Response) => {
  const sessionType= req.Sessions.sessionType;
  const serviceProviderID= req.Sessions.serviceProviderID;
  const clientsIDs= req.Sessions.clientsIDs;
  const name= req.Sessions.name;
  const details= req.Sessions.details;
  const startDate= req.Sessions.startDate;
  const duration= req.Sessions.duration;
  const serviceType= req.Sessions.serviceType;
  const location= req.Sessions.location;
  const attachments= req.Sessions.attachments;
  const requierments= req.Sessions.requierments;
  const ratings= req.Sessions.ratings;
  const reviews= req.Sessions.reviews;
  const sessionFee= req.Sessions.sessionFee;
  const payments= req.Sessions.payments;
  const status= req.Sessions.status;
  const doctorReferral= req.Sessions.doctorReferral;
  const Sessions = new SessionsModel({
    sessionType,
    serviceProviderID,
    clientsIDs,
    name,
    details,
    startDate,
    duration,
    serviceType,
    location,
    attachments,
    requierments,
    ratings,
    reviews,
    sessionFee,
    payments,
    status,
    doctorReferral,
  });
  Sessions
    .save()
    .then(async (e: any) => {
      res.json("Session Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.sessions_delete_post = (req: Request, res: Response) => {
    SessionsModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Session Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.sessions_update_post = (req: Request, res: Response) => {
    SessionsModel.findById(req.params._id)
    .then((Sessions: any) => {
        Sessions.sessionType  = req.body.sessionType;
        Sessions.serviceProviderID  = req.body.serviceProviderID;
        Sessions.clientsIDs  = req.body.clientsIDs;
        Sessions.name  = req.body.name;
        Sessions.details  = req.body.details;
        Sessions.startDate  = req.body.startDate;
        Sessions.duration  = req.body.duration;
        Sessions.serviceType  = req.body.serviceType;
        Sessions.location  = req.body.location;
        Sessions.attachments  = req.body.attachments;
        Sessions.requierments  = req.body.requierments;
        Sessions.ratings  = req.body.ratings;
        Sessions.reviews  = req.body.reviews;
        Sessions.sessionFee  = req.body.sessionFee;
        Sessions.payments  = req.body.payments;
        Sessions.status  = req.body.status;
        Sessions.doctorReferral  = req.body.doctorReferral;
        Sessions
        .save()
        .then((e: any) => {
          res.json("Session Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};