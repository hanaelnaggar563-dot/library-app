import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable() 
export class AuthGuard implements CanActivate {
    constructor (private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        console.log('Get request')
        const authHeader = request.headers.authorization;
        console.log('Auth header: ' + authHeader);
        if (!authHeader) { throw new UnauthorizedException("Wrong token"); }

        
        const token = authHeader.replace('Bearer ', '');
        console.log("token " + token)
        try {
           const payload = await this.jwtService.verifyAsync(token);
           console.log("Extracted payload " + payload)
           console.log(payload)
            request.user = payload;
            return true
        } catch (error) {
            throw new UnauthorizedException("Wrong token");
        }
    }

}