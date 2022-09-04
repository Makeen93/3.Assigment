
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
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});