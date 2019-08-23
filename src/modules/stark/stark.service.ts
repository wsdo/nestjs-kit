import { Injectable } from '@nestjs/common';

@Injectable()
export class StarkService {

  getHello(): string {
    return 'Hello Stark wang!';
  }

  getStark(): string {
    return 'Hello  Stark xiansen!';
  }
}
