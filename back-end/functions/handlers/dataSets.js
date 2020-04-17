// firebase
const { db } = require('../utilities/admin');

// post in dataSets in user devices
exports.postInDataSetsUserDevice = (req, res) => {
    let dataSetModel;
    db
        .doc(`/userDevices/${req.params.userDeviceId}`)
        .get()
        .then((doc) => {
            dataSetModel = doc.data().device.dataSets;
        })
        .then(() => {
            dataSetModel = {...req.body, createdAt: new Date().toISOString()};
            return db
                .doc(`/userDevices/${req.params.userDeviceId}`)
                .collection('dataSets')
                .add(dataSetModel)
                .then(() => {
                    return res.json(dataSetModel);
                })            
                .catch((err) => {
                    console.error(err);
                    res.status(500).json({ error: err.code });
                });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}

// get all dataSets in user device 
exports.getAllDataSetsUserDevice = (req, res) => {
    db
        .doc(`/userDevices/${req.params.userDevicesId}`)
        .collection('dataSets')
        .get()
        .then((data) => {
            let dataSets = [];
            data.forEach((doc) => {
                dataSets.push({
                    dataSetId: doc.id,
                    on: doc.data().on,
                    connected: doc.data().connected,
                    createdAt: new Date().toISOString(),
                    tail: {
                        proximity: doc.data().tail.proximity,
                        temperature: doc.data().tail.temperature,
                        pressure: doc.data().tail.pressure,
                        motion: doc.data().tail.motion,
                        position: {
                            x: doc.data().tail.position.x,
                            y: doc.data().tail.position.y,
                            z: doc.data().tail.position.z
                        }
                    },
                    midi: {
                        color: doc.data().midi.color,
                        speakers: doc.data().midi.speakers,
                        mic: doc.data().midi.mic,
                        lights: doc.data().midi.lights,
                        vibration: doc.data().midi.vibration
                    }
                });
            });
            return res.json(dataSets);
        })
        .catch((err) => console.error(err));   
}

// get one dataSets in user device
exports.getDataSetUserDevice = (req, res) => {
    
    let dataSetInfo = db
        .collection('userDevices')
        .doc(req.params.userDeviceId)
        .collection('dataSets')
        .doc(req.params.dataSetId)
        .get()
        .then((doc) => {
            let dataSet = doc.data();
            dataSet.dataSetId = doc.id;
            //console.log(dataSet);
            return res.json(dataSet);
        })
        .catch((err) => {
                console.error(err);
                res.status(500).json({ error: err.code });
        });
}