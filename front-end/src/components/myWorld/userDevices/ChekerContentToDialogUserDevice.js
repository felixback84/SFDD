import React from 'react';
// mui stuff
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import ContentToDialogUserDevice from './ContentToDialogUserDevice';

const ChekerContentToDialogUserDevice = (props) => {
    const {
        createdAt, 
        howManyAdventures, 
        description, 
        imgUrl, 
        ageRate 
    } = props;

    return(
        props.loading ? (
            <CircularProgress size={20}/>
            ) : (
                <Grid container spacing={1} direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <ContentToDialogUserDevice 
                        createdAt={createdAt}
                        howManyAdventures={howManyAdventures}
                        description={description} 
                        imgUrl={imgUrl} 
                        ageRate={ageRate} 
                    />
                </Grid>
            )
    )
}

export default ChekerContentToDialogUserDevice;