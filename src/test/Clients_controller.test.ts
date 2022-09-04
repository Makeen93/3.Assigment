
import { Model, Types } from "mongoose";
import { IClients } from "../types/interfaces";
import ClientsController from "../controllers/Clients_controller";

describe("ClientsController", () => {

  const ClientControllerModel: Model<IClients> = require("../models/Clients");
  const controller = new ClientsController();

  describe("create", () => {
    it("Client should be created correctly", async () => {
      expect(
        async () =>
          await controller.createClient({
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});