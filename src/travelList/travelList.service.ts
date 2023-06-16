/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import * as fs from 'fs-extra';

@Injectable()
export class TravelListService {
    constructor( ) {}

    async  readJsonFile(filePath: string): Promise<any> {

        try{
            const data=   await fs.readJson(filePath);
            return data

        }
        catch (error) {
            throw error
          }    
      
    }
}
