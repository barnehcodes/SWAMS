import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Employee } from '../employees/entities/employees.entity';

export class TokenSender {
  constructor(
    private readonly config: ConfigService,
    private readonly jwt: JwtService,
  ) {}

  public sendToken(employee: Employee) {
    const accessToken = this.jwt.sign(
      {
        id: employee.id,
      },
      {
        secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
        expiresIn: '1h',
      },
    );

    const refreshToken = this.jwt.sign(
      {
        id: employee.id,
      },
      {
        secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
        expiresIn: '7d',
      },
    );
    return { employee, accessToken, refreshToken };
  }
}