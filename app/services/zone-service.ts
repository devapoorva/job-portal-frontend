
import http from '@/lib/axios';
import { ZoneType } from '@/lib/types/zone';
import { Paramtypes } from '@/lib/types/param';
import constants from '@/lib/constant/url-constants';


export const zoneService = {
  getZones: async (param: Paramtypes) => {
    const response = await http.get<ZoneType[]>(constants.ZONE_URL,{params:param});
    return response.data;
  },
};
