import { Request, Response } from "express";

const ClientsModel = require("../models/Clients");


exports.clients_list = (req: Request, res: Response) => {
    ClientsModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.clients_detail = (req: Request, res: Response) => {
    ClientsModel.findById(req.params._id)
    .then((Clients: any) => res.json(Clients))
    .catch((err: any) => res.status(400).json(err));
};


exports.clients_create_post = (req: any, res: Response) => {
  const uID= req.Clients.uID;
  const preferredServiceType= req.Clients.preferredServiceType;
  const diseases= req.Clients.diseases;
  const preferences= req.Clients.preferences;
  const Clients = new ClientsModel({
    uID,
    preferredServiceType,
    diseases,
    preferences,
  });
  Clients
    .save()
    .then(async (e: any) => {
      res.json("Client Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.clients_delete_post = (req: Request, res: Response) => {
    ClientsModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Client Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.clients_update_post = (req: Request, res: Response) => {
    ClientsModel.findById(req.params._id)
    .then((Clients: any) => {
        Clients.uID  = req.body.uID;
        Clients.preferredServiceType  = req.body.preferredServiceType;
        Clients.diseases  = req.body.diseases;
        Clients.preferences  = req.body.preferences;
        Clients
        .save()
        .then((e: any) => {
          res.json("Client Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};