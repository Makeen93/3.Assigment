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
import { IAlarm } from "../types/interfaces";
import { Model } from "mongoose";

const AlarmModel: Model<IAlarm> = require("../models/Alarm");

@Route("alarm")
export default class AlarmController {
  /**
   * Get List of All Alarm
   */
  @Get("/")
  public async getAlarms(): Promise<IAlarm[]> {
    return await AlarmModel.find();
  }

  /**
   * Get a alarm details
   * @example alarmId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested alarm in not found")
  @Get("{alarmId}")
  public async getAlarm(alarmId: string): Promise<IAlarm | null> {
    return await AlarmModel.findById(alarmId);
  }


  /**
   * Delete a alarm
   * @example alarmId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested alarm in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{alarmId}")
  public async deleteAlarm(alarmId: string) {
    return await AlarmModel.findByIdAndDelete(alarmId);
  }

  /**
   * Create a alarm
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IAlarm>({
    name: "Alarm Name",
    referenceType: 'agreements',
    referenceID: "10",
    frequencyUnit: 'day',
    frequency: BigInt(25),
    active: true,
    startDate: new Date(2022,9,3),
    endDate: new Date(2022,9,3),
  
  })
  @Post("create")
  public async createAlarm(@Body() alarm: IAlarm): Promise<IAlarm> {
    return new AlarmModel({
      ...alarm,
    }).save();
  }

  /**
   * Update a alarm
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{alarmId}")
  public async updateAlarm(
    @Path() alarmId: string,
    @Body() alarm: Partial<IAlarm>
  ): Promise<IAlarm | null> {
    let alarmDocument = await AlarmModel.findById(alarmId);
    if (alarmDocument != null) {
      alarmDocument.name = alarm.name ?? alarmDocument.name;
      alarmDocument.referenceType = alarm.referenceType ?? alarmDocument.referenceType;
      alarmDocument.startDate = alarm.startDate ?? alarmDocument.startDate;
      alarmDocument.endDate = alarm.endDate ?? alarmDocument.endDate;
      alarmDocument.referenceID = alarm.referenceID ?? alarmDocument.referenceID;
      alarmDocument.frequencyUnit = alarm.frequencyUnit ?? alarmDocument.frequencyUnit;
      alarmDocument.frequency = alarm.frequency ?? alarmDocument.frequency;
      alarmDocument.active = alarm.active ?? alarmDocument.active;
      return await alarmDocument.save();
    }
    return null;
  }
}

