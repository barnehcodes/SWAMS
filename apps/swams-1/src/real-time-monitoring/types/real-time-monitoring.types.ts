export class CreateRealTimeMonitoringResponse {
  message!: string;
  error?: string;
}

export class GetRealTimeMonitoringResponse {
  realTimeMonitoring!: RealTimeMonitoring[];
  error?: string;
}

export class DeleteRealTimeMonitoringResponse {
  message!: string;
  error?: string;
}

export class RealTimeMonitoring {
  id!: string;
  buildingId!: string;
  timestamp!: Date;
  data!: string;
  createdAt!: Date;
  updatedAt!: Date;
}