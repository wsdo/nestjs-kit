import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PasswordTransformer } from './password.transformer';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({default:10})
  level: number;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  @Exclude()
  password: string;
}

export class UserFillableFields {
  email: string;
  name: string;
  password: string;
}
