import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Proptypes
import PropTypes from 'prop-types'; 

// Components
import Device from '../../components/store/devices/Device';
import UserDeviceSkeleton from '../../utilities/UserDeviceSkeleton';
 
// Redux stuff
import { connect } from 'react-redux';
import { getDevices } from '../../redux/actions/devicesActions';

class storeDevices extends Component {
    
    componentDidMount() {
        this.props.getDevices(); 
    }

    render() {
        const { devices, loading } = this.props;

        let DevicesMarkup = !loading ? (
            devices.map(device => <Device key={device.deviceId} device={device}/>)
        ) : (
            <UserDeviceSkeleton/>
        );

        return (
            <Grid container spacing={6}>
                <Grid item sm={12} xs={12}>
                    {DevicesMarkup}
                </Grid>
            </Grid> 
        );
        
    }
}

const mapStateToProps = state => ({
    devices: state.devices1.devices,
    loading: state.devices1.loading
})

export default connect(mapStateToProps, {getDevices})(storeDevices);