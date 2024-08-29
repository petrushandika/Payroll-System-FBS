import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Injectable()
export class SalaryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createSalaryDto: CreateSalaryDto) {
    return this.prismaService.gaji.create({
      data: createSalaryDto,
    });
  }

  async findAll() {
    return this.prismaService.gaji.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.gaji.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSalaryDto: UpdateSalaryDto) {
    return this.prismaService.gaji.update({
      where: { id },
      data: updateSalaryDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.gaji.delete({
      where: { id },
    });
  }
}
