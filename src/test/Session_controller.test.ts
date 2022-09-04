
import { Model, Types } from "mongoose";
import { ISession } from "../types/interfaces";
import SessionController from "../controllers/Session_controller";

describe("SessionController", () => {

  const SessionModel: Model<ISession> = require("../models/Session");
  const controller = new SessionController();

  describe("create", () => {
    it("Session should be created correctly", async () => {
      expect(
        async () =>
          await controller.createSession({
            "_id": "u7u7u67u67ufg7u6",
            "sessionType": "string",
            "serviceProviderID": "string",
            "clientsIDs": ["string"],
            "name": "string",
            "details": "string",
            "startDate": new Date(2022,1,1) ,
            "duration": 2,
            "serviceType":"online",
            "location":{location:"String"},
            "attachments":{name:"String",url:"String",type:"String"},
            "requierments":"string",
            "ratings":[{raterUID:"String", value:"String", date:new Date(2015,3,3)}],
            "reviews":[{ reviewerUID:"String", details:"String", date:new Date(2022,1,1)}],
            "sessionFee":0,
            "payments":[{discount:"String" ,paymentMethod:"String", payerId:"String", amount:"String"}],
            "status":"initiated",
            "doctorReferral":"string",
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});