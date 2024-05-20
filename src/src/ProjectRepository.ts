import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  create (data: Prisma.ProjectUncheckedCreateInput) {
    return this.prismaService.project.create({ data });
  }

  findMany (where: Prisma.ProjectWhereInput) {
    return this.prismaService.project.findMany({ where });
  }

  findById (id) {
    return this.prismaService.project.findUnique({ where: { id} });
  }

  updateById (id, data: Prisma.ProjectUncheckedUpdateInput) {
    return this.prismaService.project.update({
      where: { id },
      data,
    })
  }

  deleteById (id: string) {
    return this.prismaService.project.delete({ where: { id } });
  }
}