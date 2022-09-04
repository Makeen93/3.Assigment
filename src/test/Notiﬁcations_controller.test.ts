
import { Model, Types } from "mongoose";
import { INotifications } from "../types/interfaces";
import NotiﬁcationsController from "../controllers/Notiﬁcations_controller";

describe("RolesController", () => {

  const NotiﬁcationsModel: Model<INotifications> = require("../models/Notiﬁcations");
  const controller = new NotiﬁcationsController();

  describe("create", () => {
    it("Role should be created correctly", async () => {
      expect(
        async () =>
          await controller.createNotiﬁcation({
            "_id": "fgdfg3543635656",
            "referenceType": "session",
            "referenceID":"string",
            "statues":"sent",
            "title": "string",
            "details": "string",
            "sentDate":new Date(1,1,2005),
            "receivedDate":new Date(1,1,2005),
            "openDate":new Date(1,1,2005),
            "receiverUID":new Date(1,1,2005),
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});