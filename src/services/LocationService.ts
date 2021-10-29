import { BaseService } from "./BaseService";

class LocationAPIService extends BaseService {
  public async getLocation(currentLocationPage: number) {
    return this.get(`/?page=${currentLocationPage}`);
  }
  public async getSelectedLocation(id: any) {
    return this.get(`/${id}`);
  }
}
export const LocationService = new LocationAPIService();
