
import { Model, Types } from "mongoose";
import { ISession } from "../types/interfaces";
import SessionController from "../controllers/Session_controller";

describe("SessionController", () => {

  const SessionModel: Model<ISession> = require("../models/Session");
  const controller = new SessionController();

  describe("create", () => {
    it("Session should be created correctly", async () => {
      expect(
        async () =>
          await controller.createSession({
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});