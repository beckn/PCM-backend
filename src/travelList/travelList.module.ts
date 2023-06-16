/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TravelListService } from './travelList.service'
import { TravelListController } from './travellist.controller'

@Module({
    imports: [],
    controllers: [TravelListController],
    providers: [TravelListService]
})
export class TravelListModule {}
