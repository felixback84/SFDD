import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import MyButton from '../../../utilities/MyButton';
import TitleToDialogUserDevice from './TitleToDialogUserDevice';
import ChekerContentToDialogUserDevice from './ChekerContentToDialogUserDevice';
import ActionsToDialogUserDevice from './ActionsToDialogUserDevice';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';

// Icons
import UnfoldMore from '@material-ui/icons/UnfoldMore';

// Redux stuff
import { connect } from 'react-redux';
import { getUserDevice } from '../../../redux/actions/userDevicesActions';

const styles = (theme) => ({
    
    
    expandButton: {
        position: 'absolute',
        left: '90%'
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

class UserDeviceDialog extends Component {

    state = {
        open: false
    };

    // events
    componentDidMount(){
        if(this.props.openDialog){
            this.handleOpen();
        }
    };

    handleOpen = () => { 
        this.setState({ open: true });
        // redux action
        this.props.getUserDevice(this.props.userDeviceId);
    }

    handleClose = () => {
        this.setState({ open: false });
    } 

    render(){
        // component props and redux props
        const {
            classes,
            userDevice: { 
                createdAt,
                active,
                device: {
                    howManyAdventures,
                    nameOfDevice,
                    description,
                    imgUrl,
                    ageRate
                }
            },
            ui: { loading }
        } = this.props;
        
        return(
            <Fragment>
                {/* Open button */}
                <MyButton onClick={this.handleOpen} tip="Expand scream" tipClassName={classes.expandButton}>
                    <UnfoldMore color="primary"/>
                </MyButton>
                {/* Dialog box */}
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="sm">    
                    <TitleToDialogUserDevice onClose={this.handleClose} nameOfDevice={nameOfDevice} createdAt={createdAt}/>
                    <ChekerContentToDialogUserDevice 
                        loading={loading} 
                        createdAt={createdAt}
                        howManyAdventures={howManyAdventures}
                        description={description} 
                        imgUrl={imgUrl} 
                        ageRate={ageRate} 
                        />
                    {/* aca van data sets */}
                    <ActionsToDialogUserDevice/>
                </Dialog>        
            </Fragment>   
        )
    }   
}

// ScreamDialog.propTypes = {
//     clearErrors: PropTypes.func.isRequired,
//     getScream: PropTypes.func.isRequired,
//     screamId: PropTypes.string.isRequired,
//     userHandle: PropTypes.string.isRequired,
//     scream: PropTypes.object.isRequired,
//     UI: PropTypes.object.isRequired
// };

const mapStateToProps = (state) => ({
    userDevice: state.userDevices1.userDevice,
    ui: state.ui
});

const mapActionsToProps = {
    getUserDevice
};

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(UserDeviceDialog));
