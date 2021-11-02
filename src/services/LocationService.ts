import { BaseService } from "./BaseService";

class LocationAPIService extends BaseService {
  public async getLocation(currentLocationPage: number) {
    return this.get(`/?page=${currentLocationPage}`);
  }
  public async getSelectedLocation(id: any) {
    return this.get(`/${id}`);
  }
  public async getLocationFilterAction(locationParams: any) {
    return this.get(
      `/?name=${locationParams.name ? locationParams.name : ""}&type=${
        locationParams.type ? locationParams.type : ""
      }&dimension=${locationParams.dimension ? locationParams.dimension : ""}`
    );
  }
}
export const LocationService = new LocationAPIService();
