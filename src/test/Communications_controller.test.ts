
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
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});