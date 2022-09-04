
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
            "_id": "ccvcb567567575675vvvbn",
            name:"string",
            parties:["fgh","hjghj"],
            startDate:new Date(2005,1,1),
            endDate:new Date(2005,1,1),
            details:"this is details stvcvbcvbring",
            attachments:[{name:"attname",url:"https://dfg.com/a.jpg",type:"String"}],
            reminder:true,
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});