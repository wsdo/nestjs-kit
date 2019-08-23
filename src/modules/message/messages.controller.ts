import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) { }

  // @UseGuards(AuthGuard())
  @Get()
  findAll(): Promise<Message[]> {
    return this.messagesService.findAll();
  }

  @Post('/add')
  async add(@Body() payload): Promise<any> {
      console.log('payloadpayload', payload)
      await this.messagesService.create(payload);
  }
}
