export class CreatePredictiveAnalyticsResponse {
  message!: string;
  error?: string;
}

export class GetPredictiveAnalyticsResponse {
  predictiveAnalytics!: PredictiveAnalytics[];
  error?: string;
}

export class DeletePredictiveAnalyticsResponse {
  message!: string;
  error?: string;
}

export class PredictiveAnalytics {
  id!: string;
  buildingId!: string;
  date!: Date;
  prediction!: string;
  createdAt!: Date;
  updatedAt!: Date;
}