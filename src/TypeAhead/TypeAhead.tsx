import React, { Component } from 'react';
import Select from 'react-select';
import { TypeAheadProps, TypeAheadState } from '../interfaces';
import './TypeAhead.scss';

export default class TypeAhead extends Component<TypeAheadProps, TypeAheadState> {
  constructor(props: TypeAheadProps) {
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

  mapOptions(options: Array<any>) {
    let tempOptions: Array<any> = [];
    options.forEach(option => {
      tempOptions.push({
        label: option[this.props.labelKey],
        value: option[this.props.valueKey],
      });
    });

    this.setState({ optionsToPass: tempOptions });
  }

  mapValues(values: any) {
    if (!Array.isArray(values)) {
      // Single Select Case
      this.setState({
        valuesToPass: {
          label: values[this.props.labelKey],
          value: values[this.props.valueKey],
        },
      });
      return;
    }

    let tempValues: any = [];
    values.forEach((value: any) => {
      tempValues.push({
        label: value[this.props.labelKey],
        value: value[this.props.valueKey],
      });
    });

    this.setState({ valuesToPass: tempValues });
  }

  emitChange(selected: any) {
    if (!this.props.isMulti) {
      let tempItem = {};
      tempItem[this.props.labelKey] = selected.label;
      tempItem[this.props.valueKey] = selected.value;
      this.props.onChange(tempItem);
      this.setState({ valuesToPass: selected });
      return;
    }

    if (!selected) {
      // React select gives null on empty but we need empty array
      this.props.onChange([]);
      this.setState({ valuesToPass: selected });
      return;
    }

    let valuesToEmit: Array<any> = [];
    selected.forEach((item: any) => {
      let tempItem = {};
      tempItem[this.props.labelKey] = item.label;
      tempItem[this.props.valueKey] = item.value;
      valuesToEmit.push(tempItem);
    });

    this.props.onChange(valuesToEmit);
    this.setState({ valuesToPass: selected });
  }

  render() {
    return (
      <Select
        isMulti={this.props.isMulti} // Allows multi select option
        value={this.state.valuesToPass} // Initial Value if any
        onChange={(selected: any) => {
          // Handle selections...
          this.emitChange(selected); // Handles value change event
        }}
        options={this.state.optionsToPass} // Options
        classNamePrefix="react-select"
        placeholder={this.props.placeholder}
      />
    );
  }
}
