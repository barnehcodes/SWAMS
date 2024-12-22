export class CreateMaintenanceResponse {
  message: string;
  error?: string;
}

export class UpdateMaintenanceResponse {
  message: string;
  error?: string;
}

export class DeleteMaintenanceResponse {
  message: string;
  error?: string;
}

export class GetMaintenanceResponse {
  maintenanceTasks: MaintenanceTask[];
  error?: string;
}

export class MaintenanceTask {
  id: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}