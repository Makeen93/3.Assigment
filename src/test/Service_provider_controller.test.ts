
import { Model, Types } from "mongoose";
import { IService_provider } from "../types/interfaces";
import ServiceproviderController from "../controllers/Service_provider_controller";

describe("SessionController", () => {

  const ServiceProviderModel: Model<IService_provider> = require("../models/Service_provider");
  const controller = new ServiceproviderController();

  describe("create", () => {
    it("Service_provider should be created correctly", async () => {
      expect(
        async () =>
          await controller.createService_provider({
            uId: "string",
            bio: "string",
            specialities: "string",
            preferredServiceType: "online",
            minSessionFee: 2,
            maxSessionFee: 15,
            documents:{name:"string",url:"string",type:"string"},
            reviewerUIDs:["cvb"],
            veriﬁcationStatus:"notSubmitted",
            veriﬁcationDate:new Date(2020,5,5),
            veriﬁedByUID:"string",
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });

  
});