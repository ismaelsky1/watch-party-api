import { Document } from 'mongoose';

export class Room extends Document {
  name: string;
  url: string;
  views: number;
  currentTimeVideo: number;
  currentStatusVideo: boolean;
}
