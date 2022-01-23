import React, { Component } from 'react';
import Select from 'react-select';
import './TypeAhead.css';
export default class TypeAhead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsToPass: [],
            valuesToPass: [],
        };
    }
    componentWillMount() {
        this.mapOptions(this.props.options);
        if (this.props.value) {
            this.mapValues(this.props.value);
        }
    }
    mapOptions(options) {
        let tempOptions = [];
        options.forEach((option) => {
            tempOptions.push({
                label: option[this.props.labelKey],
                value: option[this.props.valueKey],
            });
        });
        this.setState({ optionsToPass: tempOptions });
    }
    mapValues(values) {
        if (!Array.isArray(values)) {
            this.setState({
                valuesToPass: {
                    label: values[this.props.labelKey],
                    value: values[this.props.valueKey],
                },
            });
            return;
        }
        let tempValues = [];
        values.forEach((value) => {
            tempValues.push({
                label: value[this.props.labelKey],
                value: value[this.props.valueKey],
            });
        });
        this.setState({ valuesToPass: tempValues });
    }
    emitChange(selected) {
        if (!this.props.isMulti) {
            let tempItem = {};
            tempItem[this.props.labelKey] = selected.label;
            tempItem[this.props.valueKey] = selected.value;
            this.props.onChange(tempItem);
            this.setState({ valuesToPass: selected });
            return;
        }
        if (!selected) {
            this.props.onChange([]);
            this.setState({ valuesToPass: selected });
            return;
        }
        let valuesToEmit = [];
        selected.forEach((item) => {
            let tempItem = {};
            tempItem[this.props.labelKey] = item.label;
            tempItem[this.props.valueKey] = item.value;
            valuesToEmit.push(tempItem);
        });
        this.props.onChange(valuesToEmit);
        this.setState({ valuesToPass: selected });
    }
    render() {
        return (React.createElement(Select, { isMulti: this.props.isMulti, value: this.state.valuesToPass, onChange: (selected) => {
                this.emitChange(selected);
            }, options: this.state.optionsToPass, classNamePrefix: "react-select", placeholder: this.props.placeholder }));
    }
}
//# sourceMappingURL=TypeAhead.js.map