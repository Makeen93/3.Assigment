
import { Model, Types } from "mongoose";
import { IUsers } from "../types/interfaces";
import UserController from "../controllers/User_controller";
const UserModel: Model<IUsers> = require("../models/User");
  const controller = new UserController();
describe("UserController", () => {

  

  describe("create", () => {
    it("user should be created correctly", async () => {
      expect(
        async () =>
          await controller.createUser({
            email:"vcvb@gmail.com",
            phoneNumber:"45646456",
            profilePicture:"image1",
            firstName:"meme",
            lastNAme:"",
            gender:"M",
            DOB:new Date(2010,5,5),
            address:[{ country: "string", governrate: "string", maniplocity: "string" }],
            verified:"notSend",
            status:"inActive",
            accountType:"PT",
            lastLoginDate:new Date(2020,5,5),
            accountSettings:{setting:"string"},
            languages:["en"],
            maritalStatus:"married"
          })          
      ).not.toBeNull();
      ;
      ;
      
    });
  });
 /* describe("/update/:userId", () => {
    it("user should be udpated ", async () => {
     const user={
      "phoneNumber":"45646456",
     };
     expect(
      await controller.updateUser("123456789abcd",user)
     ).not.toThrow()
    
  });
 
})*/
});