import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { AlertsResolver } from './alerts.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../guards/auth.module';

@Module({
  imports: [AuthModule],
  providers: [AlertsService, AlertsResolver, PrismaService],
})
export class AlertsModule {}