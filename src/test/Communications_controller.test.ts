
import { Model, Types } from "mongoose";
import { ICommunications } from "../types/interfaces";
import CommunicationsController from "../controllers/Communications_controller";

describe("CommunicationsController", () => {

  const CommunicationsModel: Model<ICommunications> = require("../models/Communications");
  const controller = new CommunicationsController();

  describe("create", () => {
    it("Communications should be created correctly", async () => {
      expect(
        async () =>
          await controller.createCommunication({
            "_id": "hfghfghfgh",
            "referenceType": "session",
            "referenceID":"string",
            "partiesUIDs": ["fhgh"],
            "lastUpdate":new Date(2015,4,4) ,
            "messages":[{messageType:"string", messageContent:"string", senderUID:"string", sendDate:"string"}],
            "deliveryDetails":[{detail:"string"}],
             })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});