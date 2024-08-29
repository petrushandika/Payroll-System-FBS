import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkingDayService } from './working-day.service';
import { CreateWorkingDayDto } from './dto/create-working-day.dto';
import { UpdateWorkingDayDto } from './dto/update-working-day.dto';

@Controller('working-day')
export class WorkingDayController {
  constructor(private readonly workingDayService: WorkingDayService) {}

  @Post()
  async create(@Body() createWorkingDayDto: CreateWorkingDayDto) {
    return this.workingDayService.create(createWorkingDayDto);
  }

  @Get()
  async findAll() {
    return this.workingDayService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.workingDayService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkingDayDto: UpdateWorkingDayDto,
  ) {
    return this.workingDayService.update(+id, updateWorkingDayDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.workingDayService.remove(+id);
  }
}
