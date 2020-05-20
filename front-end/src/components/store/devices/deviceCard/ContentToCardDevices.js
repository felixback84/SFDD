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
import StorefrontIcon from '@material-ui/icons/Storefront';
import Divider from '@material-ui/core/Divider';

// components
import MyButton from '../../../../utilities/MyButton';
import DeviceDialog from '../deviceDialog/DeviceDialog';

// dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const styles = (theme) => ({
    ListItem: {
        padding:3 
    },
    buyButton: {
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

const ContentToCardUserAdventure = (props) => {
    dayjs.extend(relativeTime);
    const {
        classes,
        deviceid,
        createdat,
        nameofdevice,
        title,
        description,
        duration,
        language
    } = props;

    return (
        <CardContent>
            <Grid container  justify='space-between' alignItems="center" direction="row" >
                <Grid item xs={10}>
                    <ListItem className={classes.ListItem}>
                        <ListItemAvatar >
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={`Why ${nameofdevice} is awesome?`} 
                            secondary={description} 
                        />
                    </ListItem>
                </Grid>

                <Divider orientation="vertical" flexItem/>
                
                <Grid conatainer justify='space-evenly' alignItems="center">
                    <Grid item xs={6}>
                        <ListItem className={classes.ListItem}>
                            <MyButton 
                            tip={`Buy ${nameofdevice}`} 
                            tipClassName={classes.buyButton}
                            >
                                <StorefrontIcon color="primary"/>
                            </MyButton>
                        </ListItem>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <ListItem className={classes.ListItem}>
                            <DeviceDialog 
                            labelToSwitch={nameofdevice} 
                            deviceid={deviceid}
                            />  
                        </ListItem>
                    </Grid>
                </Grid>
                
            </Grid>      
        </CardContent>       
    )
}
export default withStyles(styles)(ContentToCardUserAdventure);