import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
    name: string;

  @IsNotEmpty()
  @IsEnum(Status)
    status: Status;
}