import { flightsPerPage } from '../data';
import _ from 'lodash';

export const findById = (group, elementId) => {
    return _.find(group, (el) => el && (el.id == elementId));
}

export const setVisibleGroupPage = (group, page) => {
    group.activePage = page;3
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

