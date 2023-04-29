import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { RoomService } from './room.service';

@ApiBearerAuth()
@ApiTags('Room')
@Controller('Room')
export class RoomController {
  constructor(private readonly RoomService: RoomService) {}

  @Get()
  allFind(@Query() param: any) {
    return this.RoomService.findAll(param);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.RoomService.findOne({ _id });
  }

  @Post()
  create(@Body() createUsersDto: CreateRoomDto) {
    return this.RoomService.create(createUsersDto);
  }

  @Patch(':_id')
  update(
    @Param('_id') _id: string,
    @Body() updateUsersDto: UpdateRoomDto,
  ) {
    return this.RoomService.update(_id, updateUsersDto);
  }

  @Delete(':_id')
  delet(@Param('_id') _id: string) {
    return this.RoomService.remove(_id);
  }
}
