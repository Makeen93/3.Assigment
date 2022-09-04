
import { Model, Types } from "mongoose";
import { IUsers } from "../types/interfaces";
import UserController from "../controllers/User_controller";

describe("UserController", () => {

  const UserModel: Model<IUsers> = require("../models/User");
  const controller = new UserController();

  describe("create", () => {
    it("user should be created correctly", async () => {
      expect(
        async () =>
          await controller.createUser({
            _id: "6300e18b3bbd975cf6459983",
            "email":"vcvb@gmail.com",
            "phoneNumber":"45646456",
            "profilePicture":"image1",
            "firstName":"meme",
            "lastNAme":"",
            "gender":"M",
            "DOB":new Date(2010,5,5),
            "address":[{ country: "string", governrate: "string", maniplocity: "string" }],
            "verified":"notSend",
            "status":"inActive",
            "accountType":"PT",
            "lastLoginDate":new Date(2020,5,5),
            "accountSettings":{setting:"string"},
            "languages":["en"],
            "maritalStatus":"married"
          })          
      ).not.toThrow();
      ;
      
    });
  });
  
 
});