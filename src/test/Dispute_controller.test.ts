
import { Model, Types } from "mongoose";
import { IDispute } from "../types/interfaces";
import DisputeController from "../controllers/Dispute_controller";

describe("UserController", () => {

  const DisputeModel: Model<IDispute> = require("../models/Dispute");
  const controller = new DisputeController();

  describe("create", () => {
    it("Dispiute should be created correctly", async () => {
      expect(
        async () =>
          await controller.createDispute({
            "_id": "fghfhg674667567",
            "sessionID":"string",
            "ﬁrstPartyUID":"string",
            "secondUID":"string",
            "topic":"string",
            "details":"string",
            "attachments":[{name:"string",url:"string",type:"ing"}],
            "status":"sent",
            "resolverUID":"string",
            "inProgressDate":new Date(2005,1,1),
            "receivedDate":new Date(2005,1,1),
            "suspendedDate":new Date(2005,1,1),
            closedDate:new Date(2005,1,1),
          
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});