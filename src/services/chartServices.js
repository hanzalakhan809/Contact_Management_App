
import axios from 'axios';

const URL = 'https://disease.sh/v3/covid-19/countries';


class ChartServices {


    async getCountrySpecificData() {
        return axios.get(URL).then(response => {
            //  RETURN RESPONSE/MY PROFILE DATA
            return response.data;
        })
            .catch(error => {
                console.error( error);
            });
    }



}

export default new ChartServices();