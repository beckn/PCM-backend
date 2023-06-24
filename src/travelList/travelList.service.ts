/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import * as fs from "fs-extra";
import { TravelRequestDto } from "./travelList.request.dto";

@Injectable()
export class TravelListService {
  constructor() {}

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
      const result = data.travelSchedule.map((option) => {
        return {
          ...option,
          schedules: option.schedules.filter(
            (schedule) => schedule.loc === filter
          ),
        };
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
