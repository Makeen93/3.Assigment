import { Request, Response } from "express";

const Service_providerModel = require("../models/Service_provider");


exports.service_provider_list = (req: Request, res: Response) => {
    Service_providerModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.service_provider_detail = (req: Request, res: Response) => {
    Service_providerModel.findById(req.params._id)
    .then((Service_provider: any) => res.json(Service_provider))
    .catch((err: any) => res.status(400).json(err));
};


exports.service_provider_create_post = (req: any, res: Response) => {
  const uId= req.Service_provider.uId;
  const bio= req.Service_provider.bio;
  const specialities= req.Service_provider.specialities;
  const preferredServiceType= req.Service_provider.preferredServiceType;
  const minSessionFee= req.Service_provider.minSessionFee;
  const maxSessionFee= req.Service_provider.maxSessionFee;
  const documents= req.Service_provider.documents;
  const reviewerUIDs= req.Service_provider.reviewerUIDs;
  const veriﬁcationStatus= req.Service_provider.veriﬁcationStatus;
  const veriﬁcationDate= req.Service_provider.veriﬁcationDate;
  const veriﬁedByUID= req.Service_provider.veriﬁedByUID;
  const Service_provider = new Service_providerModel({
    uId,
    bio,
    specialities,
    preferredServiceType,
    minSessionFee,
    maxSessionFee,
    documents,
    reviewerUIDs,
    veriﬁcationStatus,
    veriﬁcationDate,
    veriﬁedByUID,
  });
  Service_provider
    .save()
    .then(async (e: any) => {
      res.json("Service_provider Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.service_provider_delete_post = (req: Request, res: Response) => {
    Service_providerModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("Service_provider Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.service_provider_update_post = (req: Request, res: Response) => {
    Service_providerModel.findById(req.params._id)
    .then((Service_provider: any) => {
        Service_provider.uId  = req.body.uId;
        Service_provider.bio  = req.body.bio;
        Service_provider.specialities  = req.body.specialities;
        Service_provider.preferredServiceType  = req.body.preferredServiceType;
        Service_provider.minSessionFee  = req.body.minSessionFee;
        Service_provider.maxSessionFee  = req.body.maxSessionFee;
        Service_provider.documents  = req.body.documents;
        Service_provider.reviewerUIDs  = req.body.reviewerUIDs;
        Service_provider.veriﬁcationStatus  = req.body.veriﬁcationStatus;
        Service_provider.veriﬁcationDate  = req.body.veriﬁcationDate;
        Service_provider.veriﬁedByUID  = req.body.veriﬁedByUID;
        Service_provider
        .save()
        .then((e: any) => {
          res.json("Service_provider Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};