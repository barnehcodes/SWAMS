export class CreateWaterConsumptionResponse {
  message: string;
  error?: string;
}

export class GetWaterConsumptionResponse {
  waterConsumption: WaterConsumption[];
  error?: string;
}

export class DeleteWaterConsumptionResponse {
  message: string;
  error?: string;
}

export class WaterConsumption {
  id: string;
  buildingId: string;
  date: Date;
  consumption: number;
  createdAt: Date;
  updatedAt: Date;
}