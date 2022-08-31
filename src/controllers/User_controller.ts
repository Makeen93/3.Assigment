const UsersModel = require("../models/User");
import {
  Get,
  Post,
  Route,
  SuccessResponse,
  Body,
  Response,
  Example,
  Delete,
  Path,
  Put,
} from "tsoa";
import { IUsers } from "../types/interfaces";
import { Model } from "mongoose";

const UserModel: Model<IUsers> = require("../models/User");

@Route("user")
export default class UserController {
  /**
   * Get List of All User
   */
  @Get("/")
  public async getUsers(): Promise<IUsers[]> {
    return await UserModel.find();
  }

  /**
   * Get a user details
   * @example userId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested user in not found")
  @Get("{userId}")
  public async getUser(userId: string): Promise<IUsers | null> {
    return await UserModel.findById(userId);
  }


  /**
   * Delete a user
   * @example userId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested user in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{userId}")
  public async deleteUser(userId: string) {
    return await UserModel.findByIdAndDelete(userId);
  }

  /**
   * Create a user
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IUsers>({
    email:"",
    phoneNumber:"",
    profilePicture:"",
    firstName:"",
    lastNAme:"",
    gender:"F",
    DOB:new Date(2022,9,3),
    address:[],
    verified:"notSend",
    status:"active",
    accountType:"PA",
    lastLoginDate:new Date(2022,9,3),
    accountSettings:"",
    languages:[],
    maritalStatus:"married",
  })
  @Post("create")
  public async createUser(@Body() user: IUsers): Promise<IUsers> {
    return new UserModel({
      ...user,
    }).save();
  }

  /**
   * Update a user
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{userId}")
  public async updateUser(
    @Path() userId: string,
    @Body() user: Partial<IUsers>
  ): Promise<IUsers | null> {
    let userDocument = await UserModel.findById(userId);
    if (userDocument != null) {
      userDocument.email = user.email ?? userDocument.email;
      userDocument.phoneNumber = user.phoneNumber ?? userDocument.phoneNumber;
      userDocument.profilePicture = user.profilePicture ?? userDocument.profilePicture;
      userDocument.firstName = user.firstName ?? userDocument.firstName;
      userDocument.lastNAme = user.lastNAme ?? userDocument.lastNAme;
      userDocument.gender = user.gender ?? userDocument.gender;
      userDocument.DOB = user.DOB ?? userDocument.DOB;
      userDocument.address = user.address ?? userDocument.address;
      userDocument.verified = user.verified ?? userDocument.verified;
      userDocument.status = user.status ?? userDocument.status;
      userDocument.accountType = user.accountType ?? userDocument.accountType;
      userDocument.lastLoginDate = user.lastLoginDate ?? userDocument.lastLoginDate;
      userDocument.accountSettings = user.accountSettings ?? userDocument.accountSettings;
      userDocument.languages = user.languages ?? userDocument.languages;
      userDocument.maritalStatus = user.maritalStatus ?? userDocument.maritalStatus;
      return await userDocument.save();
    }
    return null;
  }
}
/*
exports.users_list = (req: Request, res: Response) => {
    UsersModel.find()
    .then(async (centers: any) => res.json(centers))
    .catch((err: any) => res.status(400).json(err));
};


exports.users_detail = (req: Request, res: Response) => {
    UsersModel.findById(req.params._id)
    .then((Users: any) => res.json(Users))
    .catch((err: any) => res.status(400).json(err));
};


exports.users_create_post = (req: any, res: Response) => {
  const email= req.Users.email;
  const phoneNumber= req.Users.phoneNumber;
  const profilePicture= req.Users.profilePicture;
  const firstName= req.Users.firstName;
  const lastNAme= req.Users.lastNAme;
  const gender= req.Users.gender;
  const DOB= req.Users.DOB;
  const address= req.Users.address;
  const verified= req.Users.verified;
  const status= req.Users.status;
  const accountType= req.Users.accountType;
  const lastLoginDate= req.Users.lastLoginDate;
  const accountSettings= req.Users.accountSettings;
  const languages= req.Users.languages;
  const maritalStatus= req.Users.maritalStatus;
  const Users = new UsersModel({
    email,
    phoneNumber,
    profilePicture,
    firstName,
    lastNAme,
    gender,
    DOB,
    address,
    verified,
    status,
    accountType,
    lastLoginDate,
    accountSettings,
    languages,
    maritalStatus,
  });
  Users
    .save()
    .then(async (e: any) => {
      res.json("User Inserted!");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.user_delete_post = (req: Request, res: Response) => {
    UsersModel.findByIdAndDelete(req.params._id)
    .then((e: any) => {
      res.json("User Deleted.");
    })
    .catch((err: any) => res.status(400).json(err));
};


exports.users_update_post = (req: Request, res: Response) => {
    UsersModel.findById(req.params._id)
    .then((Users: any) => {
        Users.email  = req.body.email;
        Users.phoneNumber  = req.body.phoneNumber;
        Users.profilePicture  = req.body.profilePicture;
        Users.firstName  = req.body.firstName;
        Users.lastNAme  = req.body.lastNAme;
        Users.gender  = req.body.gender;
        Users.DOB  = req.body.DOB;
        Users.address  = req.body.address;
        Users.verified  = req.body.verified;
        Users.status  = req.body.status;
        Users.accountType  = req.body.accountType;
        Users.lastLoginDate  = req.body.lastLoginDate;
        Users.accountSettings  = req.body.accountSettings;
        Users.languages  = req.body.languages;
        Users.maritalStatus  = req.body.maritalStatus;
        Users
        .save()
        .then((e: any) => {
          res.json("User Updated!");
        })
        .catch((err: any) => res.status(400).json(err));
    })
    .catch((err: any) => res.status(400).json(err));
};*/