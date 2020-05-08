import React, { Component } from 'react';

// mui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';

// styles
// const styles = (theme) => ({
//     card: {
//         marginBottom: 20
//     }
// });

class DataSetHalo extends Component {

    render() {

        const {
            classes, 
            dataset 
        } = this.props;

        //console.log(dataSet);

        return (
            <Card>
                hi from halo
            </Card>
        )
    }
}

//export default (withStyles(styles)(DataSetHalo));
export default DataSetHalo