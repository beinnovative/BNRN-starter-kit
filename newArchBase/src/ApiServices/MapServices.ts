
import axios from 'axios';
import Environment from '../../environment'
import { IPlacesAutocomplete } from './interfaces';

let baseUrl = "https://maps.googleapis.com/maps/api/";
let API_KEY = Environment.GOOGLE_MAP_KEY;

//DEFINITION OF THE CLIENT CLASS
const mapClient = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getPlacesAutoComplete = async ({ input, location , type }: IPlacesAutocomplete) => {

    const urlParams = new URLSearchParams({
        input,
        // location,
        radius: '20000',
        language: 'en',
        components: 'country:in',
        types: type || 'geocode',
    }).toString();
    const response: any = await mapClient.get(`place/autocomplete/json?${urlParams}&key=${API_KEY}`);
    return response.data;
}