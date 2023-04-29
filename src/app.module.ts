import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './routes/room/room.module';
import { AppGateway } from './websocket.gateway';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://docker:zxc321987@cluster0.nr6covx.mongodb.net/cluster0?retryWrites=true&w=majority',
    ),
    RoomModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
