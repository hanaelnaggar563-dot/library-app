import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './AuthGuard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register') 
    async createUser(@Body() dto: CreateUserDto) { 
        return this.authService.create(dto); 
    }
    
    @Post('Login')
    async LoginUser(@Body() dto: LoginDto){
        return this.authService.login(dto);
    }

    @Get('me')
    @UseGuards(AuthGuard)
    getMe(@Req() req) {
        console.log("Entered Me")
        console.log("Payload in the request " + req.user)
        console.log(req.user)
        const userId = req.user.id; 
        return this.authService.getMe(userId);
    }
}
