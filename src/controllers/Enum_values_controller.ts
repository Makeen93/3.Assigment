
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
import { IEnum_values } from "../types/interfaces";
import { Model } from "mongoose";

const Enum_valuesModel: Model<IEnum_values> = require("../models/Enum_values");

@Route("Enum_values")
export default class Enum_valuesController {
  /**
   * Get List of All Enum_values
   */
  @Get("/")
  public async getEnum_values(): Promise<IEnum_values[]> {
    return await Enum_valuesModel.find();
  }

  /**
   * Get a enum_value details
   * @example enum_valueId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested enum_value in not found")
  @Get("{enum_valueId}")
  public async getEnum_value(enum_valueId: string): Promise<IEnum_values | null> {
    return await Enum_valuesModel.findById(enum_valueId);
  }


  /**
   * Delete a enum_value
   * @example enum_valueId "6300e18d3bbd975cf6459994"
   */
  @Response(404, "the requested enum_value in not found")
  @SuccessResponse("200", "Deleted")
  @Delete("{enum_valueId}")
  public async deleteEnum_value(enum_valueId: string) {
    return await Enum_valuesModel.findByIdAndDelete(enum_valueId);
  }

  /**
   * Create a enum_value
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "Created")
  @Example<IEnum_values>({
    name:"test",
    value:["test","test"],
    note:"test",
  })
  @Post("create")
  public async createEnum_value(@Body() enum_value: IEnum_values): Promise<IEnum_values> {
    return new Enum_valuesModel({
      ...enum_value,
    }).save();
  }

  /**
   * Update a enum_value
   */
  @Response(422, "Validation Failed")
  @SuccessResponse("200", "updated")
  @Put("update/{enum_valueId}")
  public async updateEnum_value(
    @Path() enum_valueId: string,
    @Body() enum_value: Partial<IEnum_values>
  ): Promise<IEnum_values | null> {
    let enum_valueDocument = await Enum_valuesModel.findById(enum_valueId);
    if (enum_valueDocument != null) {
      enum_valueDocument.name = enum_value.name ?? enum_valueDocument.name;
      enum_valueDocument.value = enum_value.value ?? enum_valueDocument.value;
      enum_valueDocument.note = enum_value.note ?? enum_valueDocument.note;
      return await enum_valueDocument.save();
    }
    return null;
  }
}


