import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';
import { PenyewaanService } from './penyewaan.service';

@Controller('penyewaan')
export class PenyewaanController {
  constructor(private readonly penyewaanService: PenyewaanService) {}

  @Get()
  findAll() {
    return this.penyewaanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.penyewaanService.findOne(id);
  }

  @Post()
  create(@Body() createPenyewaanDto: CreatePenyewaanDto) {
    return this.penyewaanService.createFromRest(createPenyewaanDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.penyewaanService.remove(id);
  }
}
