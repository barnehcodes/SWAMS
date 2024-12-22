export class CreateAlertResponse {
  message: string;
  error?: string;
}

export class GetAlertsResponse {
  alerts: Alert[];
  error?: string;
}

export class DeleteAlertResponse {
  message: string;
  error?: string;
}

export class Alert {
  id: string;
  buildingId: string;
  message: string;
  severity: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}