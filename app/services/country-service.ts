
import http from '@/lib/axios';
import { CountryResponse} from '@/lib/types/country';
import { Paramtypes } from '@/lib/types/param';
import constants from '@/lib/constant/url-constants';


export const countryService = {
  getCountries: async (param: Paramtypes) => {
    const response = await http.get<CountryResponse>(constants.COUNTRY_URL,{params:param});
    return response.data;
  },
};
