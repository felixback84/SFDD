import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

// dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Proptypes
import PropTypes from 'prop-types';

// Componets
//import MyButton from '../../../utilities/MyButton';
import UserDeviceDialog from './UserDeviceDialog';
import VideoPlayer from '../../util/VideoPlayer';

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// styles
const styles = (theme) => ({
        avatar: {
            backgroundColor: red[500],
        },
        card: {
            marginBottom: 20
        }
});

export class UserDevice extends Component {
    
    render() {
        dayjs.extend(relativeTime);

        // same: const classes = this.props.classes;
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
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {nameOfDevice.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={'Name of device: ' + nameOfDevice}
                    subheader={'From ages to: ' + ageRate}
                />
                {/* Video player */}
                <VideoPlayer url={videoUrl} widht={100} />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {'Mine since: ' + dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Available adventures for ${nameOfDevice} device: ${howManyAdventures}`}
                    </Typography>
                    <hr className={classes.visibleSeparator}/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Why ${nameOfDevice} is awesome?: ${description}`}
                    </Typography>
                    <UserDeviceDialog userDeviceId={userDeviceId} />
                </CardContent>

                <CardActions disableSpacing>
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
                </CardActions>
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
