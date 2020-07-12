import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class Book {
  @PrimaryColumn()
  title: string;

  @Column()
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

export default Book;
