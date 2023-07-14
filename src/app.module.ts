import { TravelListController } from "./travelList/travelList.controller";
import { TravelListService } from "./travelList/travelList.service";
import { TravelListModule } from "./travelList/travelList.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [TravelListModule],
  controllers: [TravelListController, AppController],
  providers: [TravelListService, AppService],
})
export class AppModule {}
