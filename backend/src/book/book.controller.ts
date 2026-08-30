import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookService } from './book.service';
import { AuthGuard } from 'src/auth/AuthGuard';

@Controller('books')
@UseGuards(AuthGuard)
export class BookController {

    constructor(private books: BookService){}

    @Post()
    async createBook (@Body()  dto: CreateBookDto, @Req() req){
        const userId = req.user.id;
        return this.books.create(dto, userId)
    }

    @Patch(":id")
    async Update (@Body() dto:CreateBookDto, @Param('id', ParseIntPipe) id ) {
        return this.books.updateBook(dto, id)
    }

    @Get()
    async getAllBooks(){
        return this.books.getBooks()
    }

    @Get(":id")
    async getBookById( @Param('id', ParseIntPipe) id){
        return this.books.getBookById(id)
    }

    @Delete(":id")
    async deldetBook(@Param('id', ParseIntPipe) id){
       return this.books.deleteBook(id) 
    }
}
