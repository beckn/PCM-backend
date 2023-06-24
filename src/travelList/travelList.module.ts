import { Module } from "@nestjs/common";
import { TravelListService } from "./travelList.service";
import { TravelListController } from "./travelList.controller";

@Module({
  imports: [],
  controllers: [TravelListController],
  providers: [TravelListService],
})
export class TravelListModule {}
