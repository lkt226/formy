import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskCreate, TaskUpdate } from './types/dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Get('complete/:id')
  complete(@Param('id') id: string) {
    return this.taskService.update(id, { completed: true });
  }

  @Post()
  create(@Body() data: TaskCreate) {
    return this.taskService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: TaskUpdate) {
    return this.taskService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
