import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.prismaService.user.create({
      data: createUserDto,
    });

    return newUser;
  }

  async getLoggedUser(id: number) {
    const loggedUser = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    return loggedUser;
  }

  async findOne(id: number) {
    const rawUser = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    return rawUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
