/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import * as fs from "fs-extra";
import { TravelRequestDto } from "./travelList.request.dto";

@Injectable()
export class TravelListService {
  constructor() {}

  async readJsonFile(filePath: string): Promise<any> {
    try {
      const data = await fs.readJson(filePath);
    
      return data;
    } catch (error) {
      throw error;
    }
  }

  async readSchedule(
    travel_location: TravelRequestDto,
    filePath: string
  ): Promise<any> {
    try {
      const data = await fs.readJson(filePath);
      const filter =
        travel_location.pickup_location.toLowerCase().trim() +
        "-" +
        travel_location.drop_location.toLowerCase().trim();
      const filteredData = data.travelSchedule.filter(
        (obj) => obj.loc === filter
      );
      const schedule = {
        travelSchedule: filteredData,
      };
      return schedule;
    } catch (error) {
      throw error;
    }
  }
}
