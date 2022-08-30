import { Request, Response } from "express";

const UsersModel = require("../models/User");


exports.users_list = (req: Request, res: Response) => {
    UsersModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.users_detail = (req: Request, res: Response) => {
    UsersModel.findById(req.params._id)
    .then((Users: any) => res.json(Users))
    .catch((err: any) => res.status(400).json(err));
};


exports.users_create_post = (req: any, res: Response) => {
  const email= req.Users.email;
  const phoneNumber= req.Users.phoneNumber;
  const profilePicture= req.Users.profilePicture;
  const firstName= req.Users.firstName;
  const lastNAme= req.Users.lastNAme;
  const gender= req.Users.gender;
  const DOB= req.Users.DOB;
  const address= req.Users.address;
  const verified= req.Users.verified;
  const status= req.Users.status;
  const accountType= req.Users.accountType;
  const lastLoginDate= req.Users.lastLoginDate;
  const accountSettings= req.Users.accountSettings;
  const languages= req.Users.languages;
  const maritalStatus= req.Users.maritalStatus;
  const Users = new UsersModel({
    email,
    phoneNumber,
    profilePicture,
    firstName,
    lastNAme,
    gender,
    DOB,
    address,
    verified,
    status,
    accountType,
    lastLoginDate,
    accountSettings,
    languages,
    maritalStatus,
  });
  Users
    .save()
    .then(async (e: any) => {
      res.json("User Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.user_delete_post = (req: Request, res: Response) => {
    UsersModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("User Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.users_update_post = (req: Request, res: Response) => {
    UsersModel.findById(req.params._id)
    .then((Users: any) => {
        Users.email  = req.body.email;
        Users.phoneNumber  = req.body.phoneNumber;
        Users.profilePicture  = req.body.profilePicture;
        Users.firstName  = req.body.firstName;
        Users.lastNAme  = req.body.lastNAme;
        Users.gender  = req.body.gender;
        Users.DOB  = req.body.DOB;
        Users.address  = req.body.address;
        Users.verified  = req.body.verified;
        Users.status  = req.body.status;
        Users.accountType  = req.body.accountType;
        Users.lastLoginDate  = req.body.lastLoginDate;
        Users.accountSettings  = req.body.accountSettings;
        Users.languages  = req.body.languages;
        Users.maritalStatus  = req.body.maritalStatus;
        Users
        .save()
        .then((e: any) => {
          res.json("User Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};