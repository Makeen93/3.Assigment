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
import { INotifications } from "../types/interfaces";
import { Model } from "mongoose";

const NotiﬁcationsModel: Model<INotifications> = require("../models/Notiﬁcations");

@Route("notiﬁcations")
export default class NotiﬁcationsController {
  /**
   * Get List of All Notiﬁcations
   */
  @Get("/")
  public async getNotiﬁcations(): Promise<INotifications[]> {
    return await NotiﬁcationsModel.find();
  }

  /**
   * Get a notiﬁcations details
   * @example notiﬁcationsId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested notiﬁcations in not found")
  @Get("{notiﬁcationsId}")
  public async getNotiﬁcation(notiﬁcationsId: string): Promise<INotifications | null> {
    return await NotiﬁcationsModel.findById(notiﬁcationsId);
  }


  /**
   * Delete a notiﬁcations
   * @example notiﬁcationsId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested notiﬁcations in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{notiﬁcationsId}")
  public async deleteNotiﬁcation(notiﬁcationsId: string) {
    return await NotiﬁcationsModel.findByIdAndDelete(notiﬁcationsId);
  }

  /**
   * Create a notiﬁcations
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<INotifications>({
    referenceType:"session",
    referenceID:"1",
    statues:"sent",
    title:"",
    details:"",
    sentDate:new Date(2022,9,3),
    receivedDate:new Date(2022,9,3),
    openDate:new Date(2022,9,3),
    receiverUID:new Date(2022,9,3),
  })
  @Post("create")
  public async createNotiﬁcation(@Body() notiﬁcations: INotifications): Promise<INotifications> {
    return new NotiﬁcationsModel({
      ...notiﬁcations,
    }).save();
  }

  /**
   * Update a notiﬁcations
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{notiﬁcationsId}")
  public async updateNotiﬁcation(
    @Path() notiﬁcationsId: string,
    @Body() notiﬁcations: Partial<INotifications>
  ): Promise<INotifications | null> {
    let notiﬁcationsDocument = await NotiﬁcationsModel.findById(notiﬁcationsId);
    if (notiﬁcationsDocument != null) {
      notiﬁcationsDocument.referenceType = notiﬁcations.referenceType ?? notiﬁcationsDocument.referenceType;
      notiﬁcationsDocument.referenceID = notiﬁcations.referenceID ?? notiﬁcationsDocument.referenceID;
      notiﬁcationsDocument.statues = notiﬁcations.statues ?? notiﬁcationsDocument.statues;
      notiﬁcationsDocument.title = notiﬁcations.title ?? notiﬁcationsDocument.title;
      notiﬁcationsDocument.details = notiﬁcations.details ?? notiﬁcationsDocument.details;
      notiﬁcationsDocument.sentDate = notiﬁcations.sentDate ?? notiﬁcationsDocument.sentDate;
      notiﬁcationsDocument.receivedDate = notiﬁcations.receivedDate ?? notiﬁcationsDocument.receivedDate;
      notiﬁcationsDocument.openDate = notiﬁcations.openDate ?? notiﬁcationsDocument.openDate;
      notiﬁcationsDocument.receiverUID = notiﬁcations.receiverUID ?? notiﬁcationsDocument.receiverUID;
      return await notiﬁcationsDocument.save();
    }
    return null;
  }
}


