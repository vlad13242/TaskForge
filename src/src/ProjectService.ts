import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './ProjectRepository';
import { CreateProjectDto } from './CreateProjectDto';
import { UpdateProjectDto } from './UpdateProjectDto';

@Injectable()
export class ProjectService {
  constructor (
    private readonly projectRepository: ProjectRepository,
  ) {}

  create (body: CreateProjectDto) {
    return this.projectRepository.create(body);
  }

  getAll () {
    return this.projectRepository.findMany({});
  }

  getById (projectId: string) {
    return this.projectRepository.findById(projectId);
  }

  update (projectId: string, body: UpdateProjectDto) {
    return this.projectRepository.updateById(projectId, body);
  }

  delete (projectId: string) {
    return this.projectRepository.deleteById(projectId);
  }
}