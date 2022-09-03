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
import { IService_provider } from "../types/interfaces";
import { Model } from "mongoose";

const Service_providerModel: Model<IService_provider> = require("../models/Service_provider");

@Route("service_provider")
export default class Service_providerController {
  /**
   * Get List of All Service_provider
   */
  @Get("/")
  public async getService_providers(): Promise<IService_provider[]> {
    return await Service_providerModel.find();
  }

  /**
   * Get a service_provider details
   * @example service_providerId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested service_provider in not found")
  @Get("{service_providerId}")
  public async getService_provider(service_providerId: string): Promise<IService_provider | null> {
    return await Service_providerModel.findById(service_providerId);
  }


  /**
   * Delete a service_provider
   * @example service_providerId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested service_provider in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{service_providerId}")
  public async deleteService_provider(service_providerId: string) {
    return await Service_providerModel.findByIdAndDelete(service_providerId);
  }

  /**
   * Create a service_provider
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IService_provider>({
    uId:"1",
    bio:"test",
    specialities:"test",
    preferredServiceType:"home",
    minSessionFee:10,
    maxSessionFee:20,
    documents:{name:"cancer",url:"./page",type:"pdf"},
    reviewerUIDs:["1"],
    veriﬁcationStatus:"inReview",
    veriﬁcationDate:new Date(2022,9,3),
    veriﬁedByUID:"test",
  })
  @Post("create")
  public async createService_provider(@Body() service_provider: IService_provider): Promise<IService_provider> {
    return new Service_providerModel({
      ...service_provider,
    }).save();
  }

  /**
   * Update a service_provider
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{service_providerId}")
  public async updateService_provider(
    @Path() service_providerId: string,
    @Body() service_provider: Partial<IService_provider>
  ): Promise<IService_provider | null> {
    let service_providerDocument = await Service_providerModel.findById(service_providerId);
    if (service_providerDocument != null) {
      service_providerDocument.uId = service_provider.uId ?? service_providerDocument.uId;
      service_providerDocument.bio = service_provider.bio ?? service_providerDocument.bio;
      service_providerDocument.specialities = service_provider.specialities ?? service_providerDocument.specialities;
      service_providerDocument.preferredServiceType = service_provider.preferredServiceType ?? service_providerDocument.preferredServiceType;
      service_providerDocument.minSessionFee = service_provider.minSessionFee ?? service_providerDocument.minSessionFee
      service_providerDocument.maxSessionFee = service_provider.maxSessionFee ?? service_providerDocument.maxSessionFee;
      service_providerDocument.documents = service_provider.documents ?? service_providerDocument.documents;
      service_providerDocument.reviewerUIDs = service_provider.reviewerUIDs ?? service_providerDocument.reviewerUIDs;
      service_providerDocument.veriﬁcationStatus = service_provider.veriﬁcationStatus ?? service_providerDocument.veriﬁcationStatus;
      service_providerDocument.veriﬁcationDate = service_provider.veriﬁcationDate ?? service_providerDocument.veriﬁcationDate;
      service_providerDocument.veriﬁedByUID = service_provider.veriﬁedByUID ?? service_providerDocument.veriﬁedByUID;
      return await service_providerDocument.save();
    }
    return null;
  }
}
