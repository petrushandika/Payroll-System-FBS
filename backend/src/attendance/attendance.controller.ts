import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return await this.prismaService.absensi.create({
      data: createAttendanceDto,
    });
  }

  @Get()
  async findAll() {
    return await this.prismaService.absensi.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.prismaService.absensi.findUnique({
      where: { id: +id },
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return await this.prismaService.absensi.update({
      where: { id: +id },
      data: updateAttendanceDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.prismaService.absensi.delete({
      where: { id: +id },
    });
  }
}
