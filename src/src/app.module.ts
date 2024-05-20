import { Module } from '@nestjs/common';
import { ProjectController } from './ProjectController';
import { ProjectService } from './ProjectService';
import { ProjectRepository } from './ProjectRepository';
import { PrismaService } from './PrismaService';
import { ProjectByIdPipe } from './ProjectByIdPipe';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRepository, PrismaService, ProjectByIdPipe],
})
export class AppModule {}
