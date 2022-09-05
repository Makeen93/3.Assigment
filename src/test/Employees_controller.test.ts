
import { Model, Types } from "mongoose";
import { IEmployees } from "../types/interfaces";
import EmployeesController from "../controllers/Employees_controller";

describe("EmployeesController", () => {

  const EmployeesModel: Model<IEmployees> = require("../models/Employees");
  const controller = new EmployeesController();

  describe("create", () => {
    it("Employee should be created correctly", async () => {
      expect(
        async () =>
          await controller.createEmloyee({
    uID: "string",
    roleID: "string",
    salary: 550,
    attachments:[{name:"attname",url:"url1",type:"type1"}],
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});