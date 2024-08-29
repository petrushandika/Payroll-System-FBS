import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkingDayDto } from './dto/create-working-day.dto';
import { UpdateWorkingDayDto } from './dto/update-working-day.dto';

@Injectable()
export class WorkingDayService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createWorkingDayDto: CreateWorkingDayDto) {
    return this.prismaService.hariKerja.create({
      data: createWorkingDayDto,
    });
  }

  async findAll() {
    return this.prismaService.hariKerja.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.hariKerja.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateWorkingDayDto: UpdateWorkingDayDto) {
    return this.prismaService.hariKerja.update({
      where: { id },
      data: updateWorkingDayDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.hariKerja.delete({
      where: { id },
    });
  }
}
