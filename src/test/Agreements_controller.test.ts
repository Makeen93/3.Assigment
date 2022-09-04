
import { Model, Types } from "mongoose";
import { IAgreements } from "../types/interfaces";
import AgreementsController from "../controllers/Agreements_controller";

describe("AgreementsController", () => {

  const AgreementsControllerModel: Model<IAgreements> = require("../models/Agreements");
  const controller = new AgreementsController();

  describe("create", () => {
    it("Agreements should be created correctly", async () => {
      expect(
        async () =>
          await controller.createAgreement({
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});