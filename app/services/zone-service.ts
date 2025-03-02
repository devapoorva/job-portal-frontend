
import http from '@/lib/axios';
import { ZoneResponse,ZoneType,CreadedZoneResponse, DeleteZoneResponse} from '@/lib/types/zone';
import { Paramtypes } from '@/lib/types/param';
import constants from '@/lib/constant/url-constants';


export const zoneService = {
  getZones: async (param: Paramtypes) => {
    const response = await http.get<ZoneResponse>(constants.ZONE_URL,{params:param});
    return response.data;
  },
  createZones: async (zone: ZoneType) => {
    const response = await http.post<CreadedZoneResponse>(constants.ZONE_URL,zone);
    return response.data;
  },
  deleteZone: async (id: number) => {
    const response = await http.delete<DeleteZoneResponse>(`${constants.ZONE_URL}/${id}`);
    return response.data;
  },
  updateZone: async (zone: ZoneType) => {
    const response = await http.put<CreadedZoneResponse>(`${constants.ZONE_URL}/${zone.id}`,zone);
    return response.data;
  },
};
