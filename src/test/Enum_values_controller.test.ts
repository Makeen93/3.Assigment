
import { Model, Types } from "mongoose";
import { IEnum_values } from "../types/interfaces";
import EnumValuesController from "../controllers/Enum_values_controller";

describe("EnumValuesController", () => {

  const EnumValuesModel: Model<IEnum_values> = require("../models/Enum_values");
  const controller = new EnumValuesController();

  describe("create", () => {
    it("EnumValues  should be created correctly", async () => {
      expect(
        async () =>
          await controller.createEnum_value({
           
           
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});