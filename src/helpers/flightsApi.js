import { flightsApiUrl } from './routes'
import * as api from './api'

const encodeDataToURL = (data) => {
    return Object
        .keys(data)
        .map(value => `${value}=${encodeURIComponent(data[value])}`)
        .join('&');
}

export const getAll = (params, config, onError, groupId) => {
    params['action'] = 'flights';
    return api.get(flightsApiUrl() + '?' + encodeDataToURL(params), config, onError, {groupId});
}

export const get = (params, config, onError, groupId, flight) => {
    params['action'] = 'refresh';
    return api.get(flightsApiUrl() + '?' + encodeDataToURL(params), config, onError, {groupId, flight});
}

export const handleFetchFlightsError = (err, config, params) => {
    if (err.name === 'AbortError') {
        console.log('fetchFlights aborted', err, params.groupId);
    } else {
        console.error('fetchFlights error', err, params.groupId);
    }
}
  
