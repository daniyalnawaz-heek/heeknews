import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'

export class Filter extends Component {
  render() {
    return (
      <div>
         <InputLabel id="demo-controlled-open-select-label">COUNTRY</InputLabel> 
          <Select>
          <MenuItem value="">ufhushf
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    )
  }
}

export default Filter
