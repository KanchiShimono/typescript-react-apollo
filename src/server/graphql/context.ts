import { Repository } from 'typeorm';
import Book from '../entity/Book';

export interface Context {
  repo: Repository<Book>;
}
