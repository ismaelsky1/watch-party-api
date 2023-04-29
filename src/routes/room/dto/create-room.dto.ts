import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateRoomDto {
  @IsString()
  @ApiProperty({ required: true })
  name: string;

  @IsString()
  @ApiProperty({ required: true })
  url: string;

  @IsNumber()
  @ApiProperty({ required: true })
  views: number;

  @IsNumber()
  @ApiProperty({ required: true })
  currentTimeVideo: number;

  @IsBoolean()
  @ApiProperty({ required: true })
  currentStatusVideo: boolean;
}
