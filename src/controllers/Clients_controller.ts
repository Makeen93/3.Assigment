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
import { IClients } from "../types/interfaces";
import { Model } from "mongoose";

const ClientsModel: Model<IClients> = require("../models/Clients");

@Route("client")
export default class ClientController {
  /**
   * Get List of All Client
   */
  @Get("/")
  public async getClients(): Promise<IClients[]> {
    return await ClientsModel.find();
  }

  /**
   * Get a client details
   * @example clientId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested client in not found")
  @Get("{clientId}")
  public async getClient(clientId: string): Promise<IClients | null> {
    return await ClientsModel.findById(clientId);
  }


  /**
   * Delete a client
   * @example clientId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested client in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{clientId}")
  public async deleteClient(clientId: string) {
    return await ClientsModel.findByIdAndDelete(clientId);
  }

  /**
   * Create a client
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IClients>({
    uID:"1",
    preferredServiceType:'online',
    diseases:"cancer",
    preferences:{preferences:"test"},
  })
  @Post("create")
  public async createClient(@Body() client: IClients): Promise<IClients> {
    return new ClientsModel({
      ...client,
    }).save();
  }

  /**
   * Update a client
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{clientId}")
  public async updateClient(
    @Path() clientId: string,
    @Body() client: Partial<IClients>
  ): Promise<IClients | null> {
    let clientDocument = await ClientsModel.findById(clientId);
    if (clientDocument != null) {
      clientDocument.uID = client.uID ?? clientDocument.uID;
      clientDocument.preferredServiceType = client.preferredServiceType ?? clientDocument.preferredServiceType;
      clientDocument.diseases = client.diseases ?? clientDocument.diseases;
      clientDocument.preferences = client.preferences ?? clientDocument.preferences;
      return await clientDocument.save();
    }
    return null;
  }
}
