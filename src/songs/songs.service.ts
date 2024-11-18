import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {
  db: PrismaService

  constructor(db: PrismaService) {
    this.db = db
  }

  create(createSongDto: CreateSongDto) {
    return this.db.song.create({
      data: createSongDto
    })
  }

  findAll() {
    return this.db.song.findMany();
  }

  findOne(id: number) {
    return this.db.song.findUnique({
      where: {
      id: id
    }});
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return this.db.song.update({
      where: {
        id: id
      },
      data: updateSongDto
    });
  }

  remove(id: number) {
    return this.db.song.delete({
      where: {
      id: id
    }});;
  }

  getFree() {
    return this.db.song.findMany({
      where: {
        price: 0
      }
    });
  }

  getTop(count) {
    return this.db.song.findMany({
      orderBy: {rating: 'desc'},
      take: count
    });
  }

  
}
