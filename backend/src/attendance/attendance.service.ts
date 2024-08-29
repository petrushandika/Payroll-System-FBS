import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAttendanceDto: CreateAttendanceDto) {
    return this.prismaService.absensi.create({
      data: createAttendanceDto,
    });
  }

  async findAll() {
    return this.prismaService.absensi.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.absensi.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return this.prismaService.absensi.update({
      where: { id },
      data: updateAttendanceDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.absensi.delete({
      where: { id },
    });
  }
}
