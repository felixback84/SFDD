import React from 'react';

// mui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const ContentToDialogUserDevice = (props) => {
    
    const {
        classes, 
        createdAt, 
        howManyAdventures, 
        description, 
        imgUrl, 
        ageRate
    } = props;

    return(
        <DialogContent dividers>
            <GridList className={classes.gridList} cols={2.5}>
                {imgUrl.map((imgUrl => (
                
                    <img src={imgUrl}/>
                
                )))}
            </GridList>

            <Grid container spacing={1} direction="row"
                justify="center"
                alignItems="center"
            > 
            {/* Mine since */}
                <Grid item sm={3} className={classes.gridItems}></Grid>
                <Grid item sm={6} className={classes.gridItems}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Hi other thing
                    </Typography>
                </Grid>
                <Grid item sm={3} className={classes.gridItems}></Grid>
            </Grid>
        </DialogContent>
    )
}

export default (withStyles(styles)(ContentToDialogUserDevice));