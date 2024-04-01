import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/AuthDto';
import * as bcrypt from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(authData: AuthDto): Promise<{ access_token: string, user: User }> {
        const user = await this.usersService.findOne(authData.username);

        const isMatch = await bcrypt.compareSync(authData.password, user?.password);
        if (!isMatch) {
            throw new UnauthorizedException();
        }

        const payload = { id: user.id, email: user.email, name: user.name, typeId: user.typeId };

        delete user['password'];

        return {
            access_token: await this.jwtService.signAsync(payload),
            user: user
        };
    }
}