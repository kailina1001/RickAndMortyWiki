import { BaseService } from "./BaseService";

class LocationAPIService extends BaseService {
  public async getLocation() {
    return this.get("location/?limit=108");
  }
  public async getSelectedLocation(id: any) {
    return this.get(`location/${id}`);
  }
}
export const LocationService = new LocationAPIService();
