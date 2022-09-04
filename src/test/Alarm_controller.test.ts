
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
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});