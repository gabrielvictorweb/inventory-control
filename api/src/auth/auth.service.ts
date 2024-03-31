import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/AuthDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(authData: AuthDto): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(authData.username);

        const isMatch = await bcrypt.compare(authData.password, user?.password);
        if (!isMatch) {
            throw new UnauthorizedException();
        }

        const payload = { id: user.id, username: user.name, role: user.typeId };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}