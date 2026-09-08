import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user || {
      id: 'id-usuario-teste',
      email: 'victor.rocha.vr1510@gmail.com',
      role: 'ADMIN', // <-- Garanta que está 'ADMIN' em maiúsculo
    };
  },
);