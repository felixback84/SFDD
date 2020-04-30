import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function SwitchButtonToUserDevices(props) {  
  const [state, setState] = React.useState({
    checkedA: true
  })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return(
    <FormControlLabel
      control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
      label={<Typography>Active: {props.labelToSwitch}</Typography>}
    />
  )
}