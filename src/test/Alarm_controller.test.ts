
import { Model, Types } from "mongoose";
import { IAlarm } from "../types/interfaces";
import AlarmController from "../controllers/Alarm_controller";

describe("AlarmController", () => {

  const AlarmControllerModel: Model<IAlarm> = require("../models/Alarm");
  const controller = new AlarmController();

  describe("create", () => {
    it("Alarm should be created correctly", async () => {
      expect(
        async () =>
          await controller.createAlarm({
            
            name:"string",
            referenceType: "agreements",
            referenceID:"string",
            frequencyUnit: "day",
            frequency:1,
            active: true,
            startDate: new  Date(2015,5,5) ,
           endDate:new Date(2015,5,5),
          })          
      ).not.toThrow();
      ;
      
    });
  });
  
 
});