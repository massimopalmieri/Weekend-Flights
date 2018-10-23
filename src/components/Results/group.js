import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import ResultsFlight from './flight'
import { flightsPerPage } from '../../data';

class ResultsGroup extends Component {
    render() {
      const { group, handleShowDetails, handleGroupToggle, fetchFlightUpdate, handlePageChange } = this.props

      return (
        <div className={ group.open ? 'group' : 'group closed' }>
            <h2 className="group-name" data-group={group.id} onClick={handleGroupToggle}>{group.name} <span>({group.size} flights)</span></h2>
            {group.open && (
                <div className="group-flights row">
                    {group.flights.map(flight =>
                        flight.visible &&
                        <ResultsFlight
                            flight={flight}
                            group={group}
                            key={flight.id}
                            handleShowDetails={handleShowDetails}
                            fetchFlightUpdate={fetchFlightUpdate}
                        />
                    )}

                    {( group.size > flightsPerPage ) && (
                        <nav className="flights-nav">
                            <Pagination
                                activePage={group.activePage}
                                itemsCountPerPage={flightsPerPage}
                                totalItemsCount={group.size}
                                pageRangeDisplayed={5}
                                onChange={(pageNumber) => handlePageChange(pageNumber, group.id)}
                                hideDisabled={true}
                                nextPageText="&raquo;"
                                prevPageText="&laquo;"
                                hideFirstLastPages={true}
                                itemClass="page-item"
                                linkClass="page-link"
                                innerClass="pagination justify-content-center"
                            />
                        </nav>
                    )}

                    {( group.error && group.error === 'refresh') ? (
                        <div className="no-results">
                            Unfortunately our search engine is not able to fetch flights at this moment. <br />
                            Please try again later.
                        </div>
                    ) : ( group.empty ) && (
                        <div className="no-results">No flights available</div>
                    )}
                </div>
            )}
        </div>
      )
    }
}

export default ResultsGroup
