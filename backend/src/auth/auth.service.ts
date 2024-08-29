import { Injectable } from '@nestjs/common';
import CONFIG from 'src/configs/config';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
import Hasher from 'src/utils/Hasher';
import { LoginDto } from './dto/login.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  async login(loginDto: LoginDto) {
    const requestedUser: User = await this.prismaService.user.findFirst({
      where: {
        email: loginDto.email,
      },
    });

    if (!requestedUser) {
      return {
        status: 'Wrong username/password.',
      };
    }

    const isPasswordMatch = await Hasher.comparePassword(
      loginDto.password,
      requestedUser.password,
    );

    if (!isPasswordMatch) {
      return {
        status: 'Wrong username/password.',
      };
    }

    delete requestedUser.password;

    return {
      token: jwt.sign(requestedUser, CONFIG.SECRET_SAUCE),
    };
  }
}
