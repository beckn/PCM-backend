/*
https://docs.nestjs.com/controllers#controllers
*/
import { TravelListService } from "./travelList.service";
import { Body, Controller, Get } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
@ApiTags('travel-options')

@Controller()
export class TravelListController {
  constructor(private readonly travelListService: TravelListService) {}

  @Get("/travel-options")
  async status(): Promise<any> {
    const jsonData = await this.travelListService.readJsonFile(
      "src/travelList.json"
    );

    return jsonData;
  }
}
