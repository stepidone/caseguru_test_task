import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Schema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  transform(value: unknown) {
    const validationResult = this.schema.validate(value);

    if (validationResult.error)
      throw new BadRequestException(validationResult.error.message);

    return validationResult.value;
  }
}
