import { PipeTransform, Injectable, NotFoundException } from '@nestjs/common';
import { ProjectRepository } from './ProjectRepository';

@Injectable()
export class ProjectByIdPipe implements PipeTransform {
  constructor (
    private readonly projectRepository: ProjectRepository,
  ) {}

  async transform(projectId: string) {
    const project = await this.projectRepository.findById(projectId);

    if (!project) throw new NotFoundException('Project with such id is not found');
    return projectId;
  }
}