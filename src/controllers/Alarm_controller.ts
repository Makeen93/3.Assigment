import { Request, Response } from "express";

const AlarmModel = require("../models/Alarm");


exports.alarm_list = (req: Request, res: Response) => {
    AlarmModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.alarm_detail = (req: Request, res: Response) => {
    AlarmModel.findById(req.params._id)
    .then((Alarm: any) => res.json(Alarm))
    .catch((err: any) => res.status(400).json(err));
};


exports.alarm_create_post = (req: any, res: Response) => {
  const name= req.Alarm.name;
  const referenceType= req.Alarm.referenceType;
  const referenceID= req.Alarm.referenceID;
  const frequencyUnit= req.Alarm.frequencyUnit;
  const frequency= req.Alarm.frequency;
  const active= req.Alarm.active;
  const startDate = req.Alarm.startDate;
  const endDate = req.Alarm.endDate;
  const Alarm = new AlarmModel({
    name,
    referenceType,
    referenceID,
    frequencyUnit,
    frequency,
    active,
    startDate,
    endDate,
  });
  Alarm
    .save()
    .then(async (e: any) => {
      res.json("Alarm Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.alarm_delete_post = (req: Request, res: Response) => {
    AlarmModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Alarm Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.alarm_update_post = (req: Request, res: Response) => {
    AlarmModel.findById(req.params._id)
    .then((Alarm: any) => {
        Alarm.name = req.body.name;
        Alarm.referenceType = req.body.referenceType;
        Alarm.referenceID = req.body.referenceID;
        Alarm.frequencyUnit = req.body.frequencyUnit;
        Alarm.frequency = req.body.frequency;
        Alarm.active = req.body.active;
        Alarm.startDate = req.body.startDate;
        Alarm.endDate = req.body.endDate;
        Alarm
        .save()
        .then((e: any) => {
          res.json("Alarm Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};