export class CreateHistoricalDataResponse {
  message: string;
  error?: string;
}

export class GetHistoricalDataResponse {
  historicalData: HistoricalData[];
  error?: string;
}

export class DeleteHistoricalDataResponse {
  message: string;
  error?: string;
}

export class HistoricalData {
  id: string;
  buildingId: string;
  date: Date;
  data: string;
  createdAt: Date;
  updatedAt: Date;
}