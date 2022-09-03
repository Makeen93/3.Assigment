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
import { IAnnouncements } from "../types/interfaces";
import { Model } from "mongoose";

const AnnouncementsModel: Model<IAnnouncements> = require("../models/Announcements");

@Route("announcement")
export default class AnnouncementsController {
  /**
   * Get List of All Announcements
   */
  @Get("/")
  public async getAnnouncements(): Promise<IAnnouncements[]> {
    return await AnnouncementsModel.find();
  }

  /**
   * Get a Announcement details
   * @example announcementId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested announcement in not found")
  @Get("{announcementId}")
  public async getAnnouncement(announcementId: string): Promise<IAnnouncements | null> {
    return await AnnouncementsModel.findById(announcementId);
  }


  /**
   * Delete a announcement
   * @example announcementId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested announcement in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{announcementId}")
  public async deleteAnnouncement(announcementId: string) {
    return await AnnouncementsModel.findByIdAndDelete(announcementId);
  }

  /**
   * Create a announcement
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IAnnouncements>({
    referenceType: 'session',
    referenceID:"10",
    statues:'draft',
    topic:"therapeutic massage",
    details:"Use the best equipment",
    sentDate:new Date(2022,9,3),
    attachments:[{name:"cancer",url:"./cancer",type:"pdf"}],
    receiversUIDs:"test",


  })
  @Post("create")
  public async createAnnouncement(@Body() announcement: IAnnouncements): Promise<IAnnouncements> {
    return new AnnouncementsModel({
      ...announcement,
    }).save();
  }

  /**
   * Update a announcement
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{announcementId}")
  public async updateAnnouncement(
    @Path() announcementId: string,
    @Body() announcement: Partial<IAnnouncements>
  ): Promise<IAnnouncements | null> {
    let announcementDocument = await AnnouncementsModel.findById(announcementId);
    if (announcementDocument != null) {
      announcementDocument.referenceType = announcement.referenceType ?? announcementDocument.referenceType;
      announcementDocument.referenceID = announcement.referenceID ?? announcementDocument.referenceID;
      announcementDocument.statues = announcement.statues ?? announcementDocument.statues;
      announcementDocument.topic = announcement.topic ?? announcementDocument.topic;
      announcementDocument.details = announcement.details ?? announcementDocument.details;
      announcementDocument.sentDate = announcement.sentDate ?? announcementDocument.sentDate;
      announcementDocument.attachments = announcement.attachments ?? announcementDocument.attachments;
      announcementDocument.receiversUIDs = announcement.receiversUIDs ?? announcementDocument.receiversUIDs;
      return await announcementDocument.save();
    }
    return null;
  }
}
