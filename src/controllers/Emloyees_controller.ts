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
import { IEmloyees } from "../types/interfaces";
import { Model } from "mongoose";

const EmloyeesModel: Model<IEmloyees> = require("../models/Emloyees");

@Route("Emloyees")
export default class EmloyeesController {
  /**
   * Get List of All Emloyees
   */
  @Get("/")
  public async getEmloyees(): Promise<IEmloyees[]> {
    return await EmloyeesModel.find();
  }

  /**
   * Get a emloye details
   * @example emloyeId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested emloyees in not found")
  @Get("{emloyeId}")
  public async getEmloye(emloyeId: string): Promise<IEmloyees | null> {
    return await EmloyeesModel.findById(emloyeId);
  }


  /**
   * Delete a emloye
   * @example emloyeId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested emloye in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{emloyeId}")
  public async deleteEmloye(emloyeId: string) {
    return await EmloyeesModel.findByIdAndDelete(emloyeId);
  }

  /**
   * Create a emloye
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IEmloyees>({
    uID:"1",
    roleID:"1",
    salary:500,
    attachments:[],
  })
  @Post("create")
  public async createEmloye(@Body() emloye: IEmloyees): Promise<IEmloyees> {
    return new EmloyeesModel({
      ...emloye,
    }).save();
  }

  /**
   * Update a emloye
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{emloyeId}")
  public async updateEmloye(
    @Path() emloyeId: string,
    @Body() emloye: Partial<IEmloyees>
  ): Promise<IEmloyees | null> {
    let emloyeDocument = await EmloyeesModel.findById(emloyeId);
    if (emloyeDocument != null) {
      emloyeDocument.uID = emloye.uID ?? emloyeDocument.uID;
      emloyeDocument.roleID = emloye.roleID ?? emloyeDocument.roleID;
      emloyeDocument.salary = emloye.salary ?? emloyeDocument.salary;
      emloyeDocument.attachments = emloye.attachments ?? emloyeDocument.attachments;
      return await emloyeDocument.save();
    }
    return null;
  }
}

