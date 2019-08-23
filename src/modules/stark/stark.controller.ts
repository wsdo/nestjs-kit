import { Get, Controller, Request } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { StarkService } from './stark.service';
// import { UsersService } from './../user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// import { User, UserFillableFields } from '../user/user.entity';
@Controller('stark')
export class StarkController {
  constructor(
    // private readonly usersService: UsersService,
    // @InjectRepository(User)
    private readonly starkService: StarkService,
    // private readonly userRepository: Repository<User>,
  ) {}

  @Get('me')
  async getLoggedInUser(@Request() request): Promise<any> {
    console.log('request', request.user);
    return request.user;
  }

  @Get('stark')
  getStark(): string {
    console.log(this);
    return this.starkService.getStark();
  }

  @Get()
  getStarkName(): string {
    console.log(this);
    return this.starkService.getStark();
  }
}
