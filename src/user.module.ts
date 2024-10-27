import { Module } from '@nestjs/common';
import { UserController } from './interface/controllers/User/user.contoller';
import { InMemoryUserRepository } from './infrastructure/repositories/User/in-memory-user.repository';
import { RegisterUserUseCase } from './application/use-cases/User/register-user.usecase';

@Module({
  controllers: [UserController],
  providers: [
    { provide: 'UserRepository', useClass: InMemoryUserRepository },
    {
      provide: RegisterUserUseCase,
      useFactory: (repo) => new RegisterUserUseCase(repo),
      inject: ['UserRepository'],
    },
  ],
})
export class UserModule {}
