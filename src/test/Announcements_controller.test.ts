
import { Model, Types } from "mongoose";
import { IAnnouncements } from "../types/interfaces";
import AnnouncementsController from "../controllers/Announcements_controller";

describe("AnnouncementsController", () => {

  const AnnouncementControllerModel: Model<IAnnouncements> = require("../models/Announcements");
  const controller = new AnnouncementsController();

  describe("create", () => {
    it("Announcement should be created correctly", async () => {
      expect(
        async () =>
          await controller.createAnnouncement({
            
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});