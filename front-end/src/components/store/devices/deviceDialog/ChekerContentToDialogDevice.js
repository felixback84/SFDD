import React, { Component } from 'react';
// mui stuff
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import ContentToDialogDevice from './ContentToDialogDevice';
import CarrouselOfImagesDevice from './CarrouselOfImagesDevice';
import CarrouselOfAdventuresCardsForDevice from './CarrouselOfAdventuresCardsForDevice';

// Redux stuff
import { connect } from 'react-redux';

class ChekerContentToDialogUserAdventure extends Component {
    render(){
        const {
            loading
        } = this.props;

        return(
            loading ? (
                <CircularProgress size={20}/>
                ) : (
                    <Grid container spacing={1} 
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >   
                        <CarrouselOfImagesDevice />
                        <ContentToDialogDevice />
                        <CarrouselOfAdventuresCardsForDevice adventures={adventures}/>
                    </Grid>
                )
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.devices1.loading
    
})

export default connect(mapStateToProps)(ChekerContentToDialogUserAdventure);
