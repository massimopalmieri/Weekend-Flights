import { fetchConfig, flightsPerPage } from '../data';
import _ from 'lodash';

export const findById = (group, elementId) => {
    return _.find(group, (el) => el && (el.id === elementId));
}

export const setVisibleGroupPage = (group, page) => {
    group.activePage = page;
    let c = 0;
    _.each(group.flights, (el) => {
      el.visible = ( 
        (c >= (flightsPerPage * (page - 1))) &&
        (c < (flightsPerPage * page))
      );
      c++;
    });
    return group;
}

export const resetAbortController = (abortController) => {
    abortController.abort(); // when clicked on search again, previous query will be aborted
    return new window.AbortController();
}

export const getAbortControllerConfig = (abortController) => {
    return Object.assign({}, { signal: abortController.signal }, fetchConfig);
}

export const isFlightValid = (flightUpdate, maxPrice) => {
    return !(flightUpdate.error || ((flightUpdate[0].priceLocal + flightUpdate[1].priceLocal) > maxPrice));
}