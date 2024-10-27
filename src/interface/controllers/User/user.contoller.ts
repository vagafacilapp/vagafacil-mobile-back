import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserUseCase } from 'src/application/use-cases/User/register-user.usecase';
import { User } from 'src/domain/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}

  @Post('register')
  async register(@Body() userData: Partial<User>) {
    const user = new User(
      userData.id,
      userData.nome,
      userData.email,
      userData.senha,
    );
    return await this.registerUserUseCase.execute(user);
  }
}
