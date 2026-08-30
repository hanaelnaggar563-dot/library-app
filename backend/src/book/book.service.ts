import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService){}

    async create(dto: CreateBookDto, userId: number){
        const book = await this.prisma.book.create({data: {...dto, userId: userId}})
        return new BookEntity(book)
    }

    async updateBook(dto: CreateBookDto, id: number){
        const book = await this.prisma.book.update({where:{id}, data: dto})
        return new BookEntity(book)
    }

    async getBooks(){
        const books = await this.prisma.book.findMany()
        return books.map(book => new BookEntity(book))
    }

    async getBookById(id: number){
        const book = await this.prisma.book.findUnique({where:{id}})
        if(!book){
            throw new NotFoundException('Book does not exist')
        }
        return new BookEntity(book)
    }

    async deleteBook(id: number){
     const book = await this.prisma.book.delete({where:{id}})
     return book
    }

}
