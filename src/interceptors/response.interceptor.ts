import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import {map, Observable} from 'rxjs';

export interface Response<T> {
    data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        console.log('Before...');

        return next.handle().pipe(map(data => ({
            "success": true,
            "correlationId": "",
            "data": data,
            "exceptions": []
        })));
    }
}