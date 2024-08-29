import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = await this.prismaService.pegawai.create({
      data: {
        nama: createEmployeeDto.nama,
        alamat: createEmployeeDto.alamat,
        email: createEmployeeDto.email,
        telp: createEmployeeDto.telp,
        jabatan: createEmployeeDto.jabatan,
      },
    });
    return newEmployee;
  }

  async findAll() {
    return await this.prismaService.pegawai.findMany();
  }

  async findOne(id: number) {
    const employee = await this.prismaService.pegawai.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new Error(`Employee with ID ${id} not found`);
    }

    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const updatedEmployee = await this.prismaService.pegawai.update({
      where: { id },
      data: {
        nama: updateEmployeeDto.nama,
        alamat: updateEmployeeDto.alamat,
        email: updateEmployeeDto.email,
        telp: updateEmployeeDto.telp,
        jabatan: updateEmployeeDto.jabatan,
      },
    });

    return updatedEmployee;
  }

  async remove(id: number) {
    const deletedEmployee = await this.prismaService.pegawai.delete({
      where: { id },
    });

    return deletedEmployee;
  }
}
