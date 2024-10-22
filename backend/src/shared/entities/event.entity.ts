import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column() // change to Date type
  date: string;

  @Column() // city + country
  location: string;

  @Column()
  image: string;
}
