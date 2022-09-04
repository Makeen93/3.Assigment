
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
            
          
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});