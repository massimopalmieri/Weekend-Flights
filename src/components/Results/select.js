import React, { Component } from 'react';
import Select from 'react-select'
import { airports, weekends, weekendDefault, fromDefault } from '../../data';

const formatGroupLabel = data => (
    <div className="my-select-group">
        <span>{data.label}</span>
        <span className="my-select-group-size">{data.options.length}</span>
    </div>
);

class ResultsSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        switch (this.props.name) {
            case 'airports':
                this.state.props = {
                    ...props,
                    allowClear: true,
                    defaultValue: fromDefault, 
                    placeholder: 'From',
                    options: airports    
                };
                break;
            case 'weekend':
                this.state.props = {
                    ...props,
                    defaultValue: weekendDefault,
                    placeholder: 'When',
                    options: weekends
                };
                break;
            default:
        }        
    }
  
    render() {
      const { props } = this.state;

      return <Select
                className="my-select mr-sm-2" 
                formatGroupLabel={formatGroupLabel}
                {...props} 
        />
    }
}

export default ResultsSelect;
