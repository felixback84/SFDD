import React, { Component } from 'react';

// components
import DataSetHilda from '../components/myWorld/userDevices/DataSetHilda';
import DataSetHalo from '../components/myWorld/userDevices/DataSetHalo';
import UserDeviceSkeleton from './UserDeviceSkeleton';

// switch case
class DeviceIds extends Component {

    render(){
        // devices ids
        const HALO = 'MZInC971tJYurv3OYzjR';
        const HILDA = 'gE2ySDQaMymbZe0r6KEH';

        const {
            deviceId, 
            dataSets,
            loading 
        } = this.props;
        
        switch(deviceId){
            case HILDA:
                // specific component
                let dataSetsHildaMarkup = !loading ? (
                    dataSets.map(dataSet => <DataSetHilda 
                                key={dataSet.dataSetId} 
                                dataSet={dataSet} 
                            />)
                    ) : (
                        <UserDeviceSkeleton/>
                    );
                return(dataSetsHildaMarkup);       
            case HALO:
                // specific component
                let dataSetsHaloMarkup = !loading ? (
                    dataSets.map(dataSet => <DataSetHalo 
                                key={dataSet.dataSetId} 
                                dataSet={dataSet} 
                            />)
                    ) : (
                        <UserDeviceSkeleton/>
                    );
                return(dataSetsHaloMarkup);
            default:
                return null; 
        } 
    } 
}
export default DeviceIds;