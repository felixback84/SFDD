import React, { Component } from 'react';
// mui stuff
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// components
import ContentToDialogUserAdventure from './ContentToDialogUserAdventure';
import AudioToUserAdventure from './AudioToUserAdventure';

// Redux stuff
import { connect } from 'react-redux';

export class ChekerContentToDialogUserAdventure extends Component {
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
                        <AudioToUserAdventure />
                        <ContentToDialogUserAdventure />
                    </Grid>
                )
        )
    }
}

const mapStateToProps = (state) => ({
    userAdventure: state.userAdventures1.loading
    
})

export default connect(mapStateToProps)(ChekerContentToDialogUserAdventure);
