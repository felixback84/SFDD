import React, { Component } from 'react'

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

// Icons
import StorefrontIcon from '@material-ui/icons/StorefrontIcon';

// components
import StepperPayment from './StepperPayment';

// Redux stuff
import { connect } from 'react-redux';
import { getDevice } from '../../../../redux/actions/devicesActions';

// styles
const styles = (theme) => ({
    expandButton: {
        position: 'relative'
    },
    visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: '10px'
    },
    gridItems:{
        textAlign: 'center'
    }
});

// transition
const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class PaymentProcess extends Component {
    
    state = {
        open: false
    };

    // events for modal
    handleOpen = () => { 
        this.setState({ open: true });
        // redux actions
        this.props.getDevice(this.props.deviceid);
    }

    handleClose = () => {
        this.setState({ open: false });
    } 
    
    render() {
        return (
            <Fragment>
                {/* Open button */}
                <MyButton 
                    tip={`Buy ${nameofdevice}`} 
                    tipClassName={classes.buyButton}
                >
                    <StorefrontIcon 
                        color="primary" 
                    />
                </MyButton>
                {/* Dialog box */}
                <Dialog 
                    fullScreen 
                    open={this.state.open} 
                    onClose={this.handleClose} 
                    fullWidth maxWidth="sm" 
                    TransitionComponent={Transition}
                    scroll="body"
                >    
                    <StepperPayment />
                </Dialog>        
            </Fragment>   
        )
    }
}

const mapStateToProps = (state) => ({
    device: state.devices1.device

})

const mapActionsToProps = {
    getDevice
};

export default connect(mapStateToProps,mapActionsToProps)(PaymentProcess);


