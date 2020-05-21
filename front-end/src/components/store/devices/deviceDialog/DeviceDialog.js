import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import MyButton from '../../../../utilities/MyButton';
import TitleToDialogDevice from './TitleToDialogDevice';
import ChekerContentToDialogDevice from './ChekerContentToDialogDevice';
// import ActionsToDialogUserAdventure from './ActionsToDialogUserAdventure';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

// Icons
import UnfoldMore from '@material-ui/icons/UnfoldMore';

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

class DeviceDialog extends Component {

    state = {
        open: false
    };

    // events
    handleOpen = () => { 
        this.setState({ open: true });
        // redux actions
        this.props.getDevice(this.props.deviceid);
    }

    handleClose = () => {
        this.setState({ open: false });
    } 
 
    render(){
        // component props and redux props
        const {
            classes,
            device:{
                deviceId,
                videoUrl, 
                nameOfDevice,
                howManyAdventures,
                description,
                ageRate,
                price,
                likesCount,
                createdAt,
                commentsCount,
                badgeUrl
            },
            ui: { loading }
        } = this.props;

        return(
            <Fragment>
                {/* Open button */}
                <MyButton onClick={this.handleOpen} 
                    tip="Expand scream" 
                    tipClassName={classes.expandButton}
                >
                    <UnfoldMore color="primary"/>
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
                    <TitleToDialogDevice 
                        onClose={this.handleClose} 
                        price={price} 
                        nameofdevice={nameOfDevice}
                        agerate={ageRate}
                        
                    /> 
                    <ChekerContentToDialogDevice/>
                    {/* dialog actions 
                    <ActionsToDialogUserAdventure/> */}
                </Dialog>        
            </Fragment>   
        )
    }   
}

const mapStateToProps = (state) => ({
    loading: state.devices1.loading,
    device: state.devices1.device,
    ui: state.ui
})

const mapActionsToProps = {
    getDevice
};

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(DeviceDialog));
