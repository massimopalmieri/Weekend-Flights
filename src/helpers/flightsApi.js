import { flightsApiUrl } from './routes'
import * as api from './api'

const encodeDataToURL = (data) => {
    return Object
        .keys(data)
        .map(value => `${value}=${encodeURIComponent(data[value])}`)
        .join('&');
}

export const getGroup = async (params, config, onError, groupId) => {
    Object.assign(params, {
        part: groupId,
        action: 'flights'
    });
    let group = await api.get(flightsApiUrl() + '?' + encodeDataToURL(params), config, onError, {groupId});
    group.size = group.flights.length;
    group.empty = !group.flights.length;
    group.activePage = 1;
    return group;
}

export const flightUpdateParams = (flight) => {
    return {
        id: flight.from.id + ',' + flight.to.id,
        flight_number_from: flight.from.flight_number,
        day_out_from: flight.from.date_full,
        dest_from: flight.from.airport.substr(-3),
        origin_from: flight.from.airport.substr(0, 3), 
        price_from: flight.from.price,
        priceCurency_from: flight.from.price_curr_code,
        flight_number_to: flight.to.flight_number,
        day_out_to: flight.to.date_full,
        dest_to: flight.to.airport.substr(-3),
        origin_to: flight.to.airport.substr(0, 3), 
        price_to: flight.to.price,
        priceCurency_to: flight.to.price_curr_code
    };
}

export const get = (flight, groupId, config, onError) => {
    let params = flightUpdateParams(flight);
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