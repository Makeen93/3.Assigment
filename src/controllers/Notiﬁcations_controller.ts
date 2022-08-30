import { Request, Response } from "express";

const NotiﬁcationsModel = require("../models/Notiﬁcations");


exports.notiﬁcations_list = (req: Request, res: Response) => {
    NotiﬁcationsModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.notiﬁcations_detail = (req: Request, res: Response) => {
    NotiﬁcationsModel.findById(req.params._id)
    .then((Notiﬁcations: any) => res.json(Notiﬁcations))
    .catch((err: any) => res.status(400).json(err));
};


exports.notiﬁcations_create_post = (req: any, res: Response) => {
  const referenceType= req.Notiﬁcations.referenceType;
  const referenceID= req.Notiﬁcations.referenceID;
  const statues= req.Notiﬁcations.statues;
  const title= req.Notiﬁcations.title;
  const details= req.Notiﬁcations.details;
  const sentDate= req.Notiﬁcations.sentDate;
  const receivedDate= req.Notiﬁcations.receivedDate;
  const openDate= req.Notiﬁcations.openDate;
  const receiverUID= req.Notiﬁcations.receiverUID;
  const Notiﬁcations = new NotiﬁcationsModel({
    referenceType,
    referenceID,
    statues,
    title,
    details,
    sentDate,
    receivedDate,
    openDate,
    receiverUID,
  });
  Notiﬁcations
    .save()
    .then(async (e: any) => {
      res.json("Notiﬁcation Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.notiﬁcations_delete_post = (req: Request, res: Response) => {
    NotiﬁcationsModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Notiﬁcation Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.notiﬁcations_update_post = (req: Request, res: Response) => {
    NotiﬁcationsModel.findById(req.params._id)
    .then((Notiﬁcations: any) => {
        Notiﬁcations.referenceType  = req.body.referenceType;
        Notiﬁcations.referenceID  = req.body.referenceID;
        Notiﬁcations.statues  = req.body.statues;
        Notiﬁcations.title  = req.body.title;
        Notiﬁcations.details  = req.body.details;
        Notiﬁcations.sentDate  = req.body.sentDate;
        Notiﬁcations.receivedDate  = req.body.receivedDate;
        Notiﬁcations.openDate  = req.body.openDate;
        Notiﬁcations.receiverUID  = req.body.receiverUID;
        Notiﬁcations
        .save()
        .then((e: any) => {
          res.json("Notiﬁcation Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};