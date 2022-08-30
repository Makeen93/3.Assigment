import { Request, Response } from "express";

const EmloyeesModel = require("../models/Emloyees");


exports.emloyees_list = (req: Request, res: Response) => {
    EmloyeesModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.emloyees_detail = (req: Request, res: Response) => {
    EmloyeesModel.findById(req.params._id)
    .then((Emloyees: any) => res.json(Emloyees))
    .catch((err: any) => res.status(400).json(err));
};


exports.emloyees_create_post = (req: any, res: Response) => {
  const uID= req.Emloyees.uID;
  const roleID= req.Emloyees.roleID;
  const salary= req.Emloyees.salary;
  const attachments= req.Emloyees.attachments;
  const Emloyees = new EmloyeesModel({
    uID,
    roleID,
    salary,
    attachments,
  });
  Emloyees
    .save()
    .then(async (e: any) => {
      res.json("Emloyee Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.emloyees_delete_post = (req: Request, res: Response) => {
    EmloyeesModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Emloyee Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.emloyees_update_post = (req: Request, res: Response) => {
    EmloyeesModel.findById(req.params._id)
    .then((Emloyees: any) => {
        Emloyees.uID  = req.body.uID;
        Emloyees.roleID  = req.body.roleID;
        Emloyees.salary  = req.body.salary;
        Emloyees.attachments  = req.body.attachments;
        Emloyees
        .save()
        .then((e: any) => {
          res.json("Emloyee Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};