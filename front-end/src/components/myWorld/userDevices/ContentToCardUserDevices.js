import React from 'react';
// mui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

// dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const styles = (theme) => ({
    
});

const ContentToCardUserDevices = (props) => {
    dayjs.extend(relativeTime);
    //const {classes} = props;
    return (
        <CardContent>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Mine Since:" 
                            secondary={dayjs(props.createdAt).format('h:mm a, MMMM DD YYYY')} 
                        />
                    </ListItem>
                </Grid>
                <Grid item xs={4}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={`Why ${props.nameOfDevice} is awesome?:`}
                            secondary={props.description}
                        />
                    </ListItem>
                </Grid>
                <Grid item xs={4}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={`Available adventures for ${props.nameOfDevice} device:`} 
                            secondary={props.howManyAdventures} 
                        />
                    </ListItem>
                </Grid>
            </Grid>
        </CardContent>
    )
}
export default withStyles(styles)(ContentToCardUserDevices);