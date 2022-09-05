
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
            name:"string",
            parties:["fgh","hjghj"],
            startDate:new Date(2005,1,1),
            endDate:new Date(2005,1,1),
            details:"this is details stvcvbcvbring",
            attachments:[{name:"attname",url:"https://dfg.com/a.jpg",type:"String"}],
            reminder:true,
          })          
      ).not.toThrow();
    });
  });
  describe("Agreements", () => {

    it("should get a Agreements correctly", async () => {
      expect(
        async () => await controller.getAgreements()
      ).not.toThrow();
    });
  });
  
  describe("Agreement", () => {

    it("should get a Agreements correctly", async () => {
      expect(
        async () => await controller.getAgreement("63137ff3b2585dfb28df9ba6")
      ).not.toThrow();
    });
  });
 
  describe("delete", () => {

    it("should delete a Agreements correctly", async () => {
      expect(
        async () => await controller.deleteAgreement("63137ff3b2585dfb28df9ba6")
      ).not.toThrow();
    });
  });

  describe("update", () => {

    it("should update a Agreements correctly", async () => {
      expect(
        async () => await controller.updateAgreement(
          "63137ff3b2585dfb28df9ba6",
          {
            name:"string",
            parties:["fgh","hjghj"],
            startDate:new Date(2005,1,1),
            endDate:new Date(2005,1,1),
            details:"this is details stvcvbcvbring",
            attachments:[{name:"attname",url:"https://dfg.com/a.jpg",type:"String"}],
            reminder:true,
          }
        )
      ).not.toThrow();
    });
  });

});