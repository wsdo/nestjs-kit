import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messagesRepository: Repository<Message>,
    ) { }

    private readonly messages: Message[] = [];
    async save(): Promise<Message> {
        const message = new Message();
        message.userId = Math.round(Math.random() * 1000);
        message.content = '消息内容';
        return await message.save();
    }
    async create(payload) {
      await this.messagesRepository.save(payload)
    }
    async findAll(): Promise<Message[]> {
        return await this.messagesRepository.find();
    }
}
