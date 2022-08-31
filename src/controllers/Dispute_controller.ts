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
import { IDispute } from "../types/interfaces";
import { Model } from "mongoose";

const DisputeModel: Model<IDispute> = require("../models/Dispute");

@Route("Dispute")
export default class DisputeController {
  /**
   * Get List of All Dispute
   */
  @Get("/")
  public async getDisputes(): Promise<IDispute[]> {
    return await DisputeModel.find();
  }

  /**
   * Get a dispute details
   * @example disputeId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested dispute in not found")
  @Get("{disputeId}")
  public async getDispute(disputeId: string): Promise<IDispute | null> {
    return await DisputeModel.findById(disputeId);
  }


  /**
   * Delete a dispute
   * @example disputeId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested dispute in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{disputeId}")
  public async deleteDispute(disputeId: string) {
    return await DisputeModel.findByIdAndDelete(disputeId);
  }

  /**
   * Create a dispute
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IDispute>({
    sessionID:"1",
    ﬁrstPartyUID:"1",
    secondUID:"1",
    topic:"",
    details:"",
    attachments:[],
    status:'in-progress',
    resolverUID:"1",
    inProgressDate:new Date(2022,9,3),
    receivedDate:new Date(2022,9,3),
    suspendedDate:new Date(2022,9,3),
    closedDate:new Date(2022,9,3),
  })
  @Post("create")
  public async createDispute(@Body() dispute: IDispute): Promise<IDispute> {
    return new DisputeModel({
      ...dispute,
    }).save();
  }

  /**
   * Update a dispute
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{disputeId}")
  public async updateDispute(
    @Path() disputeId: string,
    @Body() dispute: Partial<IDispute>
  ): Promise<IDispute | null> {
    let disputeDocument = await DisputeModel.findById(disputeId);
    if (disputeDocument != null) {
      disputeDocument.sessionID = dispute.sessionID ?? disputeDocument.sessionID;
      disputeDocument.ﬁrstPartyUID = dispute.ﬁrstPartyUID ?? disputeDocument.ﬁrstPartyUID;
      disputeDocument.secondUID = dispute.secondUID ?? disputeDocument.secondUID;
      disputeDocument.topic = dispute.topic ?? disputeDocument.topic;
      disputeDocument.details = dispute.details ?? disputeDocument.details;
      disputeDocument.attachments = dispute.attachments ?? disputeDocument.attachments;
      disputeDocument.status = dispute.status ?? disputeDocument.status;
      disputeDocument.resolverUID = dispute.resolverUID ?? disputeDocument.resolverUID;
      disputeDocument.inProgressDate = dispute.inProgressDate ?? disputeDocument.inProgressDate;
      disputeDocument.receivedDate = dispute.receivedDate ?? disputeDocument.receivedDate;
      disputeDocument.suspendedDate = dispute.suspendedDate ?? disputeDocument.suspendedDate;
      disputeDocument.closedDate = dispute.closedDate ?? disputeDocument.closedDate;
      return await disputeDocument.save();
    }
    return null;
  }
}

