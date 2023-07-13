/*
https://docs.nestjs.com/controllers#controllers
*/
import { TravelListService } from "./travelList.service";
import { Body, Controller, Get, Query } from "@nestjs/common";
import { TravelRequestDto } from "./travelList.request.dto";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("travel-options")
@Controller()
export class TravelListController {
  constructor(private readonly travelListService: TravelListService) {}

  @Get("/travel-options")
  async options(@Query() travel_location: TravelRequestDto): Promise<any> {
    const getSchedule = await this.travelListService.readSchedule(
      travel_location,
      "src/travelSchedule.json"
    );
    return getSchedule;
  }
}
