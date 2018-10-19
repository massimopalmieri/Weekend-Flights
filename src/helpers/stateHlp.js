import { flightsPerPage } from '../data';
import _ from 'lodash';
import * as common from './common'

export const setStatePriceUpdating = (state, flightId, groupId) => {
    let group, flights;
    if (
      (group = state.groups[groupId]) && 
      (flights = common.findById(group.flights, flightId))
    ) {
      flights.updating = true;
    }
    return state;
}

export const setStatePriceError = (state, flightId, groupId, error_message, flight_id) => {
    let group, flights, flight;
    if (
      (group = state.groups[groupId]) && 
      (flights = common.findById(group.flights, flightId)) &&
      (flight = (flights.from.id == flight_id) ? flights.from : flights.to)
    ) {
      flights.updating = false; 
      Object.assign(flight, {
        error: true,
        error_message: 'Ticket not available'
      });
    }
    return state;
}

export const setStatePriceLimitError = (state, flightId, groupId, priceFrom, priceTo) => {
    let group, flights, 
      changedFrom = false, 
      changedTo = false,
      errorProps = {
        error: true,
        error_message: 'Ticket too expensive'
      };
    if (
      (group = state.groups[groupId]) && 
      (flights = common.findById(group.flights, flightId))
    ) {
      Object.assign(flights, {
        updating: false,
      });
      if (changedFrom = (priceFrom != parseFloat(flights.from.price))) {
        Object.assign(flights.from, errorProps, {
          price: priceFrom.toFixed(2),
        });
      }
      if (changedTo = (priceTo != parseFloat(flights.to.price))) {
        Object.assign(flights.to, errorProps, {
          price: priceTo.toFixed(2),
        });
      }
      if (changedFrom || changedTo) {
        flights.price = (parseFloat(priceFrom) + parseFloat(priceTo)).toFixed(0);    
      }
    }
    return state;
}

export const setStateFlightRemove = (state, flightId, groupId) => { 
    let group, flights, lastPage;
    if (
      (group = state.groups[groupId]) && 
      (flights = common.findById(group.flights, flightId))
    ) {
      if (flights.visible) {
        group.flights.every((flight) => { // returns first next flight that wasn't visible
          if (flight && flight.id > flightId && !flight.visible) {
            flight.visible = true;
            return false;
          }
          return true;
        });
      }

      group.flights = group.flights.filter((el) => {
        return (el && (el.id !== flightId));
      }); // remove flight - returns group without current flight

      state.groups[groupId].size -= 1;
      lastPage = Math.ceil(group.size / flightsPerPage);
      if (group.activePage > lastPage) {
        group = common.setVisibleGroupPage(group, lastPage);
      }
      if (!state.groups[groupId].size) {
        state.groups[groupId].empty = true;
      }
    }
    return state;
}

export const setStatePriceUpdated = (state, flightId, groupId, priceFrom, priceTo) => {
    let group, flights, 
      changedFrom = false, 
      changedTo = false;
    if (
      (group = state.groups[groupId]) && 
      (flights = common.findById(group.flights, flightId))
    ) {
      Object.assign(flights, {
        updating: false,
        updated: true
      });
      if (changedFrom = (priceFrom != parseFloat(flights.from.price))) {
        flights.from.price = priceFrom.toFixed(2);
      }
      if (changedTo = (priceTo != parseFloat(flights.to.price))) {
        flights.to.price = priceTo.toFixed(2);
      }
      if (changedFrom || changedTo) { // if any price changed
        flights.price = (parseFloat(priceFrom) + parseFloat(priceTo)).toFixed(0);    
        group.flights = _.sortBy(group.flights, (el) => { // sorting flights by price
          return parseInt(el.price);
        });
        group = common.setVisibleGroupPage(group, group.activePage); // makes sure that sorted flights are visible
      }
    }
    return state;
}

export const setStateGroupOpen = (state, groupId) => {
    state.groups[groupId].open = !state.groups[groupId].open;
    return state;
}

export const setStateGroupPageChange = (state, page, groupId) => {
    let group;
    if (
      (group = state.groups[groupId]) && 
      (page <= Math.ceil(group.size / flightsPerPage))
    ) {
      group = common.setVisibleGroupPage(group, page);
    }
    return state;
}

export const setStateUpdatingAborted = (state, flightId, groupId) => {
    let group, flights;
    console.log('FetchFlightUpdate aborted', groupId, flightId);
    if (
      (group = state.groups[groupId]) && 
      (flights = common.findById(group.flights, flightId))
    ) {
      flights.updating = false;
    }
    return state;  
}

export const setStateFlightSet = (state, flightId, groupId) => {
  let group, flight;      
  if (
    (group = state.groups[groupId]) &&
    (flight = common.findById(group.flights, flightId))
  ) state.flight = flight;
  return state;
}

export const setStateGroupFetched = (state, group) => {
  let fetchedGroup = [];
  group.open = !state.hasOpenGroup;
  fetchedGroup[group.id] = group;
  Object.assign(state.groups, fetchedGroup);
  if (!state.hasOpenGroup && !group.error) {
    state.hasOpenGroup = true;
  }
  state.loadingFlights = false;
  return state;
}

export const setStateFlightUpdated = (state, price, flight, groupId) => {
  if (price.error) {
    state = setStatePriceError(state, flight.id, groupId, price.error, price.flight_id);
  } else if ((price[0].priceLocal + price[1].priceLocal) > state.maxPrice) {
    state = setStatePriceLimitError(state, flight.id, groupId, price[0].priceLocal, price[1].priceLocal);
  } else {
    state = setStatePriceUpdated(state, flight.id, groupId, price[0].priceLocal, price[1].priceLocal);
  }
  return state;
}