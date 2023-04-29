import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return { server: 'match-party-api', status: true, release: '0.0.1' };
  }
}
