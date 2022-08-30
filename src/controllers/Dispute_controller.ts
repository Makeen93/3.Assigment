import { Request, Response } from "express";

const DisputeModel = require("../models/Dispute");


exports.dispute_list = (req: Request, res: Response) => {
    DisputeModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.dispute_detail = (req: Request, res: Response) => {
    DisputeModel.findById(req.params._id)
    .then((Dispute: any) => res.json(Dispute))
    .catch((err: any) => res.status(400).json(err));
};


exports.dispute_create_post = (req: any, res: Response) => {
  const sessionID= req.Dispute.sessionID;
  const ﬁrstPartyUID= req.Dispute.ﬁrstPartyUID;
  const secondUID= req.Dispute.secondUID;
  const topic= req.Dispute.topic;
  const details= req.Dispute.details;
  const attachments= req.Dispute.attachments;
  const status= req.Dispute.status;
  const resolverUID= req.Dispute.resolverUID;
  const inProgressDate= req.Dispute.inProgressDate;
  const receivedDate= req.Dispute.receivedDate;
  const suspendedDate= req.Dispute.suspendedDate;
  const closedDate= req.Dispute.closedDate;
  const Dispute = new DisputeModel({
    sessionID,
    ﬁrstPartyUID,
    secondUID,
    topic,
    details,
    attachments,
    status,
    resolverUID,
    inProgressDate,
    receivedDate,
    suspendedDate,
    closedDate,
  });
  Dispute
    .save()
    .then(async (e: any) => {
      res.json("Dispute Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.dispute_delete_post = (req: Request, res: Response) => {
    DisputeModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Dispute Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.dispute_update_post = (req: Request, res: Response) => {
    DisputeModel.findById(req.params._id)
    .then((Dispute: any) => {
        Dispute.sessionID  = req.body.sessionID;
        Dispute.ﬁrstPartyUID  = req.body.ﬁrstPartyUID;
        Dispute.secondUID  = req.body.secondUID;
        Dispute.topic  = req.body.topic;
        Dispute.details  = req.body.details;
        Dispute.attachments  = req.body.attachments;
        Dispute.status  = req.body.status;
        Dispute.resolverUID  = req.body.resolverUID;
        Dispute.inProgressDate  = req.body.inProgressDate;
        Dispute.receivedDate  = req.body.receivedDate;
        Dispute.suspendedDate  = req.body.suspendedDate;
        Dispute.closedDate  = req.body.closedDate;
        Dispute
        .save()
        .then((e: any) => {
          res.json("Dispute Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};