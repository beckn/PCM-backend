import { ApiProperty } from "@nestjs/swagger";
export class TravelRequestDto {
    @ApiProperty({
        type:String
      })
   pickup_location:string

   @ApiProperty({
    type:String
  })
  drop_location:string
  }