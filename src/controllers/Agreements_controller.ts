import { Request, Response } from "express";

const AgreementsModel = require("../models/Agreements");


exports.agreements_list = (req: Request, res: Response) => {
    AgreementsModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.agreements_detail = (req: Request, res: Response) => {
    AgreementsModel.findById(req.params._id)
    .then((Agreements: any) => res.json(Agreements))
    .catch((err: any) => res.status(400).json(err));
};


exports.agreements_create_post = (req: any, res: Response) => {
  const name= req.Agreements.name;
  const parties= req.Agreements.parties;
  const startDate= req.Agreements.startDate;
  const endDate= req.Agreements.endDate;
  const details= req.Agreements.details;
  const attachments= req.Agreements.attachments;
  const reminder = req.Agreements.reminder;
  const agreement = new AgreementsModel({
    name,
    parties,
    startDate,
    endDate,
    details,
    attachments,
    reminder,
  });
  agreement
    .save()
    .then(async (e: any) => {
      res.json("Agreement Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};

// Handle book delete on POST.
exports.agreements_delete_post = (req: Request, res: Response) => {
    AgreementsModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Agreement Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.agreements_update_post = (req: Request, res: Response) => {
    AgreementsModel.findById(req.params._id)
    .then((Agreements: any) => {
        Agreements.name = req.body.name;
        Agreements.parties = req.body.parties;
        Agreements.startDate = req.body.startDate;
        Agreements.endDate = req.body.endDate;
        Agreements.details = req.body.details;
        Agreements.attachments = req.body.attachments;
        Agreements.reminder = req.body.reminder;
        Agreements.agreement = req.body.agreement;
        Agreements
        .save()
        .then((e: any) => {
          res.json("Agreement Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};