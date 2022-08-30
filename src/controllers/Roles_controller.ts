import { Request, Response } from "express";

const RolesModel = require("../models/Roles");


exports.roles_list = (req: Request, res: Response) => {
    RolesModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.roles_detail = (req: Request, res: Response) => {
    RolesModel.findById(req.params._id)
    .then((Roles: any) => res.json(Roles))
    .catch((err: any) => res.status(400).json(err));
};


exports.roles_create_post = (req: any, res: Response) => {
  const name= req.Roles.name;
  const employees= req.Roles.employees;
  const users= req.Roles.users;
  const service_providers= req.Roles.service_providers;
  const clients= req.Roles.clients;
  const sessions= req.Roles.sessions;
  const communication= req.Roles.communication;
  const disputes= req.Roles.disputes;
  const enum_values= req.Roles.enum_values;
  const Roles = new RolesModel({
    name,
    employees,
    users,
    service_providers,
    clients,
    sessions,
    communication,
    disputes,
    enum_values,
  });
  Roles
    .save()
    .then(async (e: any) => {
      res.json("Role Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.roles_delete_post = (req: Request, res: Response) => {
    RolesModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Role Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.roles_update_post = (req: Request, res: Response) => {
    RolesModel.findById(req.params._id)
    .then((Roles: any) => {
        Roles.name  = req.body.name;
        Roles.employees  = req.body.employees;
        Roles.users  = req.body.users;
        Roles.service_providers  = req.body.service_providers;
        Roles.clients  = req.body.clients;
        Roles.sessions  = req.body.sessions;
        Roles.communication  = req.body.communication;
        Roles.disputes  = req.body.disputes;
        Roles.enum_values  = req.body.enum_values;
        Roles
        .save()
        .then((e: any) => {
          res.json("Role Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};