import { Request, Response } from "express";

const Enum_valuesModel = require("../models/Enum_values");


exports.enum_values_list = (req: Request, res: Response) => {
    Enum_valuesModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.enum_values_detail = (req: Request, res: Response) => {
    Enum_valuesModel.findById(req.params._id)
    .then((Enum_values: any) => res.json(Enum_values))
    .catch((err: any) => res.status(400).json(err));
};


exports.enum_values_create_post = (req: any, res: Response) => {
  const name= req.Enum_values.name;
  const value= req.Enum_values.value;
  const note= req.Enum_values.note;
  const Enum_values = new Enum_valuesModel({
    name,
    value,
    note,
  });
  Enum_values
    .save()
    .then(async (e: any) => {
      res.json("Enum_value Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.enum_values_delete_post = (req: Request, res: Response) => {
    Enum_valuesModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Enum_value Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.enum_values_update_post = (req: Request, res: Response) => {
    Enum_valuesModel.findById(req.params._id)
    .then((Enum_values: any) => {
        Enum_values.name  = req.body.name;
        Enum_values.value  = req.body.value;
        Enum_values.note  = req.body.note;
        Enum_values
        .save()
        .then((e: any) => {
          res.json("Enum_value Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};