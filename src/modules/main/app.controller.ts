import { Get, Controller, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(AuthGuard())
  root(): string {
    return this.appService.root();
  }
}
