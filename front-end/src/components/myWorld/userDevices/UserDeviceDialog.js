import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '@material-ui/core/Button';
import MyButton from '../../../utilities/MyButton';

// dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// react player
import ReactPlayer from "react-player";

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Redux stuff
import { connect } from 'react-redux';
import { getUserDevice } from '../../../redux/actions/userDevicesActions';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    expandButton: {
        position: 'absolute',
        left: '90%'
    },
    media:{
        padding: 0
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

// Title dialog box
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

// dialog actions part
const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

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
                userDeviceId,
                userHandle,
                createdAt,
                active,
                device: {
                    howManyAdventures,
                    nameOfDevice,
                    description,
                    imgUrl,
                    videoUrl,
                    ageRate,
                    badgeUrl
                }
            },
            ui: { loading }
        } = this.props;
        
        // dialog (content)
        const dialogMarkup = loading ? (
                <CircularProgress size={5}/>
            ) : (
                <Grid container spacing={1} direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={12}>
                        <ReactPlayer
                            url={videoUrl}
                            width= '100%'
                        />
                    </Grid>
                    {/* Mine since */}
                    <Grid container spacing={1} direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item sm={3} className={classes.gridItems}></Grid>
                        <Grid item sm={6} className={classes.gridItems}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {'Mine since: ' + dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItems}></Grid>
                    </Grid>
                    {/* Extra data */}
                    <Grid item sm={4} className={classes.gridItems}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {howManyAdventures}
                        </Typography>
                    </Grid>
                    <Grid item sm={4} className={classes.gridItems}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {ageRate}
                        </Typography>
                    </Grid>
                    <Grid item sm={4} className={classes.gridItems}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Other thing
                        </Typography>
                    </Grid>
                    <hr className={classes.visibleSeparator}/>
                    <Grid item sm={12} className={classes.gridItems}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            )

        return(
            <Fragment>
                {/* Open button */}
                <MyButton onClick={this.handleOpen} tip="Expand scream" tipClassName={classes.expandButton}>
                    <UnfoldMore color="primary"/>
                </MyButton>
                {/* Dialog box */}
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="sm">    
                    {/* Dialog header */}
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`Name of Device: ${nameOfDevice}`}
                        </Typography>
                    </DialogTitle>
                    {/* content ogf dialog */}
                    <DialogContent dividers>
                        {dialogMarkup}
                    </DialogContent>
                    {/* Dialog actions */}
                    <DialogActions>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                        aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </DialogActions>
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
