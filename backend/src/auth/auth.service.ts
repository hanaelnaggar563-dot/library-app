import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthEntity } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService){}

    async create(dto: CreateUserDto) {  
        const hashedPassword = await bcrypt.hash(dto.password, 10); 
        return new AuthEntity(await this.prisma.user.create({ data: {email: dto.email, name: dto.name, password: hashedPassword }})); 
    }

    async login (dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
  where: { email: dto.email }
});
     if(!user){throw new UnauthorizedException("there's no user with this email")}
     
     const correctPassword = bcrypt.compare(user.password, dto.password);

     if(!correctPassword){throw new UnauthorizedException("wrong passwordl")}

     const payload = {id: user.id}

     return {access_token : await this.jwtService.signAsync(payload)}
    }

    async getMe(userId: number) { 
const user = await this.prisma.user.findUnique({ where: { id: userId 
}}); 
if (!user) { 
throw new UnauthorizedException('User not found'); 
} 
return new AuthEntity(user); 
}    

}

