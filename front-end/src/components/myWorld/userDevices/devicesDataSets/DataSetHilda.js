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

class DataSetHilda extends Component {

    render() {

        const {
            classes, 
            dataset:{
                createdAt
            }
        } = this.props;

        //console.log(dataSet);

        return (
            <Card>
                {createdAt}
                hi from hilda
            </Card>
        )
    }
}

//export default (withStyles(styles)(DataSetHilda));
export default DataSetHilda