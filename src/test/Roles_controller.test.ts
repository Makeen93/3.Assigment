
import { Model, Types } from "mongoose";
import { IRoles } from "../types/interfaces";
import RolesController from "../controllers/Roles_controller";

describe("RolesController", () => {

  const RolesModel: Model<IRoles> = require("../models/Roles");
  const controller = new RolesController();

  describe("create", () => {
    it("Role should be created correctly", async () => {
      expect(
        async () =>
          await controller.createRole({
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});