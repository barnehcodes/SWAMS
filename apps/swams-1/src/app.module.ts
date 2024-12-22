import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { WaterConsumptionModule } from './water-consumption/water-consumption.module';
import { AlertsModule } from './alerts/alerts.module';
import { HistoricalDataModule } from './historical-data/historical-data.module';
import { PredictiveAnalyticsModule } from './predictive-analytics/predictive-analytics.module';
import { RealTimeMonitoringModule } from './real-time-monitoring/real-time-monitoring.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WaterConsumptionModule,
    AlertsModule,
    HistoricalDataModule,
    PredictiveAnalyticsModule,
    RealTimeMonitoringModule,
  ],
})
export class AppModule {}