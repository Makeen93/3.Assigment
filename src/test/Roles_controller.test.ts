
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
            "_id":"fghfh45644444",
            "name":"string",
            "employees":["hj"],
            "users":["hhh"],
            "service_providers":["hh"],
            "clients":["hhh"],
            "sessions":["string"],
            "communication":["string"],
            "disputes":["string"],
            "enum_values":["string"],
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});