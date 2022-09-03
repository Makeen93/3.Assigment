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
import { ICommunications } from "../types/interfaces";
import { Model } from "mongoose";

const CommunicationsModel: Model<ICommunications> = require("../models/Communications");

@Route("Communications")
export default class CommunicationsController {
  /**
   * Get List of All Communications
   */
  @Get("/")
  public async getCommunications(): Promise<ICommunications[]> {
    return await CommunicationsModel.find();
  }

  /**
   * Get a communication details
   * @example communicationId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested communication in not found")
  @Get("{communicationId}")
  public async getCommunication(communicationId: string): Promise<ICommunications | null> {
    return await CommunicationsModel.findById(communicationId);
  }


  /**
   * Delete a communication
   * @example communicationId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested communication in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{communicationId}")
  public async deleteCommunication(communicationId: string) {
    return await CommunicationsModel.findByIdAndDelete(communicationId);
  }

  /**
   * Create a communication
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<ICommunications>({
    referenceType:'agreements',
    referenceID:"1",
    partiesUIDs:["test","test"],
    lastUpdate:new Date(2022,9,3),
    messages:[{messageType:"test", messageContent:"text", senderUID:"1", sendDate:"2022-9-3"}],
    deliveryDetails:[{detail:"test"}],
    
  })
  @Post("create")
  public async createCommunication(@Body() communication: ICommunications): Promise<ICommunications> {
    return new CommunicationsModel({
      ...communication,
    }).save();
  }

  /**
   * Update a communication
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{communicationId}")
  public async updateCommunication(
    @Path() communicationId: string,
    @Body() communication: Partial<ICommunications>
  ): Promise<ICommunications | null> {
    let communicationDocument = await CommunicationsModel.findById(communicationId);
    if (communicationDocument != null) {
      communicationDocument.referenceType = communication.referenceType ?? communicationDocument.referenceType;
      communicationDocument.referenceID = communication.referenceID ?? communicationDocument.referenceID;
      communicationDocument.partiesUIDs = communication.partiesUIDs ?? communicationDocument.partiesUIDs;
      communicationDocument.lastUpdate = communication.lastUpdate ?? communicationDocument.lastUpdate;
      communicationDocument.messages = communication.messages ?? communicationDocument.messages;
      communicationDocument.deliveryDetails = communication.deliveryDetails ?? communicationDocument.deliveryDetails;
      return await communicationDocument.save();
    }
    return null;
  }
}

