import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
@Entity()
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { name: 'user_id' })
    userId: number;

    @Column('text', { name: 'content' })
    content: string;
}
