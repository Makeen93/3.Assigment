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
import { IRoles } from "../types/interfaces";
import { Model } from "mongoose";

const RolesModel: Model<IRoles> = require("../models/Roles");

@Route("roles")
export default class RolesController {
  /**
   * Get List of All Roles
   */
  @Get("/")
  public async getRoles(): Promise<IRoles[]> {
    return await RolesModel.find();
  }

  /**
   * Get a role details
   * @example roleId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested role in not found")
  @Get("{roleId}")
  public async getRole(roleId: string): Promise<IRoles | null> {
    return await RolesModel.findById(roleId);
  }


  /**
   * Delete a role
   * @example roleId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested role in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{roleId}")
  public async deleteRole(roleId: string) {
    return await RolesModel.findByIdAndDelete(roleId);
  }

  /**
   * Create a role
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IRoles>({
    name:"",
    employees:["test","test"],
    users:["test","test"],
    service_providers:["test","test"],
    clients:["test","test"],
    sessions:["test","test"],
    communication:["test","test"],
    disputes:["test","test"],
    enum_values:["test","test"],
  })
  @Post("create")
  public async createRole(@Body() role: IRoles): Promise<IRoles> {
    return new RolesModel({
      ...role,
    }).save();
  }

  /**
   * Update a role
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{roleId}")
  public async updateRole(
    @Path() roleId: string,
    @Body() role: Partial<IRoles>
  ): Promise<IRoles | null> {
    let roleDocument = await RolesModel.findById(roleId);
    if (roleDocument != null) {
      roleDocument.name = role.name ?? roleDocument.name;
      roleDocument.employees = role.employees ?? roleDocument.employees;
      roleDocument.users = role.users ?? roleDocument.users;
      roleDocument.service_providers = role.service_providers ?? roleDocument.service_providers;
      roleDocument.clients = role.clients ?? roleDocument.clients;
      roleDocument.communication = role.communication ?? roleDocument.communication;
      roleDocument.sessions = role.sessions ?? roleDocument.sessions;
      roleDocument.disputes = role.disputes ?? roleDocument.disputes;
      roleDocument.enum_values = role.enum_values ?? roleDocument.enum_values;
      return await roleDocument.save();
    }
    return null;
  }
}