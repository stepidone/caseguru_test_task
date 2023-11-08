import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  private validate(data: unknown) {
    return {
      status: 'success',
      statusCode: 200,
      data,
    };
  }

  private async validateError(error: HttpException) {
    const statusCode = error.getStatus ? error.getStatus() : 500;
    if (statusCode === 500) console.error(error);
    return {
      status: 'error',
      statusCode,
      message: statusCode === 500 ? 'Internal server error' : error.message,
    };
  }

  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map(this.validate), catchError(this.validateError));
  }
}
