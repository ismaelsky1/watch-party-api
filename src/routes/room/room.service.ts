import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './room';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel('Room')
    private readonly RoomModel: Model<Room>,
  ) {}

  async findAll(findRoomDto: any): Promise<Room[]> {
    return await this.RoomModel.find(findRoomDto).exec();
  }

  async findOne(findRoomDto: any): Promise<Room> {
    const user = await this.RoomModel.findOne(findRoomDto).exec();
    if (!user) {
      throw new NotFoundException(
        `user ID ${findRoomDto._id} not Found!`,
      );
    }
    return user;
  }

  async create(createRoomDto: CreateRoomDto) {
    const createdUser = new this.RoomModel(createRoomDto);
    try {
      return await createdUser.save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(_id: string, updateRoomDto: UpdateRoomDto) {
    await this.RoomModel.updateOne({ _id }, updateRoomDto).exec();
    return await this.findOne({ _id });
  }

  async remove(_id: string): Promise<any> {
    return await this.RoomModel.deleteOne({ _id }).exec();
  }
}
