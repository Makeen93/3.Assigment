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
import { IAgreements } from "../types/interfaces";
import { Model } from "mongoose";

const AgreementsModel: Model<IAgreements> = require("../models/Agreements");

@Route("agreements")
export default class AgreementsController {
  /**
   * Get List of All Agreements
   */
  @Get("/")
  public async getAgreements(): Promise<IAgreements[]> {
    return await AgreementsModel.find();
  }

  /**
   * Get a agreement details
   * @example agreementId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested agreement in not found")
  @Get("{agreementId}")
  public async getAgreement(agreementId: string): Promise<IAgreements | null> {
    return await AgreementsModel.findById(agreementId);
  }


  /**
   * Delete a agreement
   * @example agreementId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested agreement in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{agreementId}")
  public async deleteAgreement(agreementId: string) {
    return await AgreementsModel.findByIdAndDelete(agreementId);
  }

  /**
   * Create a agreement
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IAgreements>({
    name: "Agreements Name",
    parties: ["List of Partie"],
    startDate: new Date(2022,9,3),
    endDate: new Date(2022,9,3),
    details: "Agreements Details",
    attachments: [""],
    reminder : true,
  })
  @Post("create")
  public async createAgreement(@Body() agreement: IAgreements): Promise<IAgreements> {
    return new AgreementsModel({
      ...agreement,
    }).save();
  }

  /**
   * Update a agreement
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{agreementId}")
  public async updateAgreement(
    @Path() agreementId: string,
    @Body() agreement: Partial<IAgreements>
  ): Promise<IAgreements | null> {
    let agreementDocument = await AgreementsModel.findById(agreementId);
    if (agreementDocument != null) {
      agreementDocument.name = agreement.name ?? agreementDocument.name;
      agreementDocument.parties = agreement.parties ?? agreementDocument.parties;
      agreementDocument.startDate = agreement.startDate ?? agreementDocument.startDate;
      agreementDocument.endDate = agreement.endDate ?? agreementDocument.endDate;
      agreementDocument.details = agreement.details ?? agreementDocument.details;
      agreementDocument.attachments = agreement.attachments ?? agreementDocument.attachments;
      agreementDocument.reminder = agreement.reminder ?? agreementDocument.reminder;
      return await agreementDocument.save();
    }
    return null;
  }
}