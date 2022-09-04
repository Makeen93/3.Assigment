
import { Model, Types } from "mongoose";
import { INotifications } from "../types/interfaces";
import NotiﬁcationsController from "../controllers/Notiﬁcations_controller";

describe("RolesController", () => {

  const NotiﬁcationsModel: Model<INotifications> = require("../models/Notiﬁcations");
  const controller = new NotiﬁcationsController();

  describe("create", () => {
    it("Role should be created correctly", async () => {
      expect(
        async () =>
          await controller.createNotiﬁcation({
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});