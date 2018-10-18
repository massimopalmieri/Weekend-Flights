import { flightsApiUrl } from './routes'
import * as api from './api'

const encodeDataToURL = (data) => {
    return Object
        .keys(data)
        .map(value => `${value}=${encodeURIComponent(data[value])}`)
        .join('&');
}

export const getAll = (params) => {
    params['action'] = 'flights';
    return api.get(flightsApiUrl() + '?' + encodeDataToURL(params));
}


export const get = (id) =>
  api.get(flightsApiUrl(id))
