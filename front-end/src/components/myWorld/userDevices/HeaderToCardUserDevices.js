import React from 'react';
// mui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';

// components
import SwitchButtonToUserDevices from './SwitchButtonToUserDevices';

const styles = (theme) => ({
    avatar: {
        backgroundColor: red[500],
    }
});

const CardToHeader = (props) => {
    const {classes} = props;
    return (
        <div>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.nameOfDevice.charAt(0)}
                    </Avatar>
                }
                action={
                    <SwitchButtonToUserDevices labelToSwitch={props.nameOfDevice}/>
                }
                title={'Name of device: ' + props.nameOfDevice}
                subheader={'From ages to: ' + props.ageRate}
            />
        </div>
    )
}
export default withStyles(styles)(CardToHeader);