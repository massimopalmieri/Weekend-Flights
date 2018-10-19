import { flightsApiUrl } from './routes'
import * as api from './api'

const encodeDataToURL = (data) => {
    return Object
        .keys(data)
        .map(value => `${value}=${encodeURIComponent(data[value])}`)
        .join('&');
}

export const getGroup = async (params, config, onError, groupId) => {
    params['action'] = 'flights';
    let group = await api.get(flightsApiUrl() + '?' + encodeDataToURL(params), config, onError, {groupId});
    group.id = parseInt(group.id);
    group.size = group.flights.length;
    group.empty = !group.flights.length;
    group.activePage = 1;
    return group;
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
  
