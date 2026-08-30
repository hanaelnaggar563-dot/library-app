import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({secret: 'Hanas Secret', signOptions: {expiresIn: '1h'}})],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
