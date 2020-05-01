import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

// Proptypes
import PropTypes from 'prop-types';

// Componets
//import MyButton from '../../../utilities/MyButton';
import VideoPlayer from '../../util/VideoPlayer';
import HeaderToCardUserDevices from './HeaderToCardUserDevices';
import ContentToCardUserDevices from './ContentToCardUserDevices';
import ActionsToCardUserDevices from './ActionsToCardUserDevices';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';

// styles
const styles = (theme) => ({
    card: {
        marginBottom: 20
    },
    visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: '1px'
    },
});

export class UserDevice extends Component {
    
    render() {
        
        const {  
            classes,
            userDevice: { 
                userDeviceId,
                userHandle,
                createdAt,
                active,
                device:{
                    videoUrl,
                    nameOfDevice,
                    howManyAdventures,
                    description,
                    ageRate
                }
            }
        } = this.props;

        return (
            <Card className={classes.card}>
                <HeaderToCardUserDevices nameOfDevice={nameOfDevice} ageRate={ageRate}/>
                <VideoPlayer url={videoUrl} widht={100} />
                <ContentToCardUserDevices 
                    createdAt={createdAt} 
                    howManyAdventures={howManyAdventures} 
                    description={description}
                />
                <hr className={classes.visibleSeparator}/>
                <ActionsToCardUserDevices userDeviceId={userDeviceId}/>
            </Card>     
        )
    }
}

// UserDevice.propTypes = {
//     user: PropTypes.object.isRequired,
//     userDevice: PropTypes.object.isRequired,
//     classes: PropTypes.object.isRequired,
//     openDialog: PropTypes.bool
// }

export default withStyles(styles)(UserDevice);
