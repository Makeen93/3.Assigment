import { Request, Response } from "express";

const CommunicationsModel = require("../models/Communications");


exports.communications_list = (req: Request, res: Response) => {
    CommunicationsModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.communications_detail = (req: Request, res: Response) => {
    CommunicationsModel.findById(req.params._id)
    .then((Communications: any) => res.json(Communications))
    .catch((err: any) => res.status(400).json(err));
};


exports.communications_create_post = (req: any, res: Response) => {
  const referenceType= req.Communications.uID;
  const referenceID= req.Communications.preferredServiceType;
  const partiesUIDs= req.Communications.diseases;
  const lastUpdate= req.Communications.preferences;
  const messages= req.Communications.preferences;
  const deliveryDetails= req.Communications.preferences;
  const Communications = new CommunicationsModel({
    referenceType,
    referenceID,
    partiesUIDs,
    lastUpdate,
    messages,
    deliveryDetails,
  });
  Communications
    .save()
    .then(async (e: any) => {
      res.json("Communication Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.communications_delete_post = (req: Request, res: Response) => {
    CommunicationsModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Communication Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.communications_update_post = (req: Request, res: Response) => {
    CommunicationsModel.findById(req.params._id)
    .then((Communications: any) => {
        Communications.referenceType  = req.body.referenceType;
        Communications.referenceID  = req.body.referenceID;
        Communications.partiesUIDs  = req.body.partiesUIDs;
        Communications.lastUpdate  = req.body.lastUpdate;
        Communications.messages  = req.body.messages;
        Communications.deliveryDetails  = req.body.deliveryDetails;
        Communications
        .save()
        .then((e: any) => {
          res.json("Communication Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};