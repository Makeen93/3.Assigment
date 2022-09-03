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
import { ISession } from "../types/interfaces";
import { Model } from "mongoose";

const SessionModel: Model<ISession> = require("../models/Session");

@Route("session")
export default class SessionController {
  /**
   * Get List of All Session
   */
  @Get("/")
  public async getSessions(): Promise<ISession[]> {
    return await SessionModel.find();
  }

  /**
   * Get a session details
   * @example sessionId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested session in not found")
  @Get("{sessionId}")
  public async getSession(sessionId: string): Promise<ISession | null> {
    return await SessionModel.findById(sessionId);
  }


  /**
   * Delete a session
   * @example sessionId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested session in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{sessionId}")
  public async deleteSession(sessionId: string) {
    return await SessionModel.findByIdAndDelete(sessionId);
  }

  /**
   * Create a session
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<ISession>({
    sessionType:"test",
    serviceProviderID:"test",
    clientsIDs:["test"],
    name:"test",
    details:"test",
    startDate:new Date(2022,9,3),
    duration:10,
    serviceType:"online",
    location:{location:"test"},
    attachments:{name:"cancer",url:"./cancer",type:"pdf"},
    requierments:"test",
    ratings:[{raterUID:"test", value:"test", date:new Date(2022,9,3)}],
    reviews:[{ reviewerUID:"test", details:"test", date:new Date(2022,9,3)}],
    sessionFee:150,
    payments:[{discount:"test" ,paymentMethod:"test", payerId:"test", amount:"test"}],
    status:"agreed",
    doctorReferral:"test",
  })
  @Post("create")
  public async createSession(@Body() session: ISession): Promise<ISession> {
    return new SessionModel({
      ...session,
    }).save();
  }

  /**
   * Update a session
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{sessionId}")
  public async updateSession(
    @Path() sessionId: string,
    @Body() session: Partial<ISession>
  ): Promise<ISession | null> {
    let sessionDocument = await SessionModel.findById(sessionId);
    if (sessionDocument != null) {
      sessionDocument.sessionType = session.sessionType ?? sessionDocument.sessionType;
      sessionDocument.serviceProviderID = session.serviceProviderID ?? sessionDocument.serviceProviderID;
      sessionDocument.clientsIDs = session.clientsIDs ?? sessionDocument.clientsIDs;
      sessionDocument.name = session.name ?? sessionDocument.name;
      sessionDocument.details = session.details ?? sessionDocument.details
      sessionDocument.startDate = session.startDate ?? sessionDocument.startDate;
      sessionDocument.duration = session.duration ?? sessionDocument.duration;
      sessionDocument.serviceType = session.serviceType ?? sessionDocument.serviceType;
      sessionDocument.location = session.location ?? sessionDocument.location;
      sessionDocument.location = session.location ?? sessionDocument.location;
      sessionDocument.requierments = session.requierments ?? sessionDocument.requierments;
      sessionDocument.ratings = session.ratings ?? sessionDocument.ratings;
      sessionDocument.reviews = session.reviews ?? sessionDocument.reviews;
      sessionDocument.sessionFee = session.sessionFee ?? sessionDocument.sessionFee;
      sessionDocument.payments = session.payments ?? sessionDocument.payments;
      sessionDocument.status = session.status ?? sessionDocument.status;
      sessionDocument.doctorReferral = session.doctorReferral ?? sessionDocument.doctorReferral;
      return await sessionDocument.save();
    }
    return null;
  }
}