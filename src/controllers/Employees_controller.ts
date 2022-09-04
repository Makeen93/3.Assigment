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
import { IEmployees } from "../types/interfaces";
import { Model } from "mongoose";

const EmployeesModel: Model<IEmployees> = require("../models/Employees");

@Route("Employees")
export default class EmployeesController {
  /**
   * Get List of All Employees
   */
  @Get("/")
  public async getEmployees(): Promise<IEmployees[]> {
    return await EmployeesModel.find();
  }

  /**
   * Get a emloye details
   * @example emloyeId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested employees in not found")
  @Get("{emloyeId}")
  public async getEmloye(emloyeId: string): Promise<IEmployees | null> {
    return await EmployeesModel.findById(emloyeId);
  }


  /**
   * Delete a emloye
   * @example emloyeId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested emloye in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{emloyeId}")
  public async deleteEmloye(emloyeId: string) {
    return await EmployeesModel.findByIdAndDelete(emloyeId);
  }

  /**
   * Create a emloye
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IEmployees>({
    uID:"1",
    roleID:"1",
    salary:500,
    attachments:[{name:"cancer",url:"./cancer",type:"pdf"}],
  })
  @Post("create")
  public async createEmloyee(@Body() emloye: IEmployees): Promise<IEmployees> {
    return new EmployeesModel({
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
    @Body() emloye: Partial<IEmployees>
  ): Promise<IEmployees | null> {
    let emloyeDocument = await EmployeesModel.findById(emloyeId);
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

