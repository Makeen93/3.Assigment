import { Request, Response } from "express";

const AnnouncementsModel = require("../models/Announcements");


exports.announcements_list = (req: Request, res: Response) => {
    AnnouncementsModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.announcement_detail = (req: Request, res: Response) => {
    AnnouncementsModel.findById(req.params._id)
    .then((Announcements: any) => res.json(Announcements))
    .catch((err: any) => res.status(400).json(err));
};


exports.announcement_create_post = (req: any, res: Response) => {
  const referenceType= req.Announcements.referenceType;
  const referenceID= req.Announcements.referenceID;
  const statues= req.Announcements.statues;
  const topic= req.Announcements.topic;
  const details= req.Announcements.details;
  const sentDate= req.Announcements.sentDate;
  const attachments = req.Announcements.attachments;
  const receiversUIDs = req.Announcements.receiversUIDs;
  const announcements = new AnnouncementsModel({
    referenceType,
    referenceID,
    statues,
    topic,
    details,
    sentDate,
    attachments,
    receiversUIDs,
  });
  announcements
    .save()
    .then(async (e: any) => {
      res.json("Announcement Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.announcement_delete_post = (req: Request, res: Response) => {
    AnnouncementsModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Announcement Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.announcement_update_post = (req: Request, res: Response) => {
    AnnouncementsModel.findById(req.params._id)
    .then((Announcement: any) => {
        Announcement.referenceType = req.body.referenceType;
        Announcement.referenceID = req.body.referenceID;
        Announcement.statues = req.body.statues;
        Announcement.topic = req.body.topic;
        Announcement.details = req.body.details;
        Announcement.sentDate = req.body.sentDate;
        Announcement.attachments = req.body.attachments;
        Announcement.receiversUIDs = req.body.receiversUIDs;
        Announcement
        .save()
        .then((e: any) => {
          res.json("Announcement Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};