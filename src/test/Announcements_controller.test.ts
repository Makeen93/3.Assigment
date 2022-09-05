
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
            referenceType: "session",
            referenceID:null,
            statues: "draft",
            topic: "string",
            details: "string",
            sentDate: new Date(2022,2,2) ,
            attachments:[{name:"string",url:"string",type:"string"}],
            receiversUIDs:"string",
          })          
      ).not.toThrow();
      ;
      ;
      
    });
  });
  
 
});