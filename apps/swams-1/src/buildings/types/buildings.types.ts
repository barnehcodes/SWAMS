export class CreateBuildingResponse {
  message: string;
  error?: string;
}

export class UpdateBuildingResponse {
  message: string;
  error?: string;
}

export class DeleteBuildingResponse {
  message: string;
  error?: string;
}

export class GetBuildingResponse {
  building: Building;
  error?: string;
}

export class GetAllBuildingsResponse {
  buildings: Building[];
  error?: string;
}

export class Building {
  id: string;
  name: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}