import { IntersectionType, PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import { PaginationDTO } from '../../common/dto/pagination.dto';
import { BaseIpaddressDto } from './base-ipaddress.dto';

export class FilterIpaddressDto extends PartialType(BaseIpaddressDto) {
  @IsOptional()
  _id?: Types.ObjectId;

  @IsOptional()
  createdBy?: Types.ObjectId;
}

export class QueryIpaddressDto extends IntersectionType(
  PaginationDTO,
  FilterIpaddressDto,
) {}
