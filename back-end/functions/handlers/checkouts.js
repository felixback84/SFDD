// firebase
const { db } = require('../utilities/admin');

// get all checkouts
exports.getAllCheckouts = (req, res) => {
    let checkoutsData = {};
    db
        .collection('checkouts')
        .where('userHandle', '==', req.user.userHandle)
        .where('type', '==', 'device')
        .get()
        .then((data)=> {
            data.forEach((doc) => {
                checkoutsData.devices.push({
                    checkoutId: doc.id,
                    state: doc.data().state,
                    type: 'device',
                    userHandle: doc.data().userHandle,
                    address: doc.data().address,
                    user: doc.data().user,
                    device: doc.data().device
                });
            });
        })
    db
        .collection('checkouts')
        .where('userHandle', '==', req.user.userHandle)
        .where('type', '==', 'adventure')
        .get()
        .then((data)=> {
            data.forEach((doc) => {
                checkoutsData.adventures.push({
                    checkoutId: doc.id,
                    state: doc.data().state,
                    type: 'adventure',
                    userHandle: doc.data().userHandle,
                    address: doc.data().address,
                    user: doc.data().user,
                    adventure: doc.data().adventure
                });
            });
        })    
        .then(() => {
            return res.json(checkoutsData);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}

// get a specific checkout
exports.getCheckout = (req, res) => {
    let checkoutData = {};
    db
        .doc(`/checkouts/${req.params.checkoutId}`)
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return res.status(404).json({ error: 'checkout not found' });
            }
            checkoutData = doc.data();
            checkoutData.checkoutId = doc.id;
            return res.json(checkoutData);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}

// post data for checkout to post in userDevices 
exports.postDataCheckOutDevice = (req, res) => {

    // global var
    let dataCheckout = {};

    // put addiotional info for checkout
    let checkoutData = {
        userHandle: req.user.userHandle,
        createdAt: new Date().toISOString(),
        type: 'device',
        state:'pending'
    }
    dataCheckout = checkoutData;
    
    // address
    const newUserAdressToDelivery = {
        city: req.body.city,
        addressToDelivery: req.body.addressToDelivery,
        plastic: req.body.plastic
    };

    // add address to global var
    dataCheckout.address = newUserAdressToDelivery;
    // ask for user data
    db
        .doc(`/users/${req.user.userHandle}`)
        .get()
        .then((doc) => {
            let userDataFilter = {
                names: doc.data().names,
                lastname: doc.data().lastname,
                email: doc.data().email
            }
            dataCheckout.user = userDataFilter;
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
    // ask for device info
    db
        .doc(`/devices/${req.params.deviceId}`)
        .get()
        .then((doc) => {
            let deviceDataFilter = {
                deviceId: req.params.deviceId,
                nameOfDevice: doc.data().nameOfDevice,
                price: doc.data().price
            };
                dataCheckout.device = deviceDataFilter;
                console.log(dataCheckout);
                // add final object in db
                db.collection('checkouts').add(dataCheckout);
                // send response from server
                return res.json('done with the checkout');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
}

// post data for checkout to post in userAdventures
exports.postDataCheckOutAdventure = (req, res) => {

    // global var
    let dataCheckout = {};

    // put addiotional info for checkout
    let checkoutData = {
        userHandle: req.user.userHandle,
        createdAt: new Date().toISOString(),
        type: 'adventure',
        state:'pending'
    }
    dataCheckout = checkoutData;
    
    // address
    const newUserAdressToDelivery = {
        city: req.body.city,
        addressToDelivery: req.body.addressToDelivery,
        plastic: req.body.plastic
    };

    // add address to global var
    dataCheckout.address = newUserAdressToDelivery;
    // ask for user data
    db
        .doc(`/users/${req.user.userHandle}`)
        .get()
        .then((doc) => {
            let userDataFilter = {
                names: doc.data().names,
                lastname: doc.data().lastname,
                email: doc.data().email
            }
            dataCheckout.user = userDataFilter;
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.code });
        });
    // ask for adventure info
    db
    .doc(`/adventures/${req.params.adventureId}`)
    .get()
    .then((doc) => {
        let adventureDataFilter = {
            adventureId: req.params.adventureId,
            title: doc.data().title,
            price: doc.data().price
        };
            dataCheckout.adventure = adventureDataFilter;
            console.log(dataCheckout);
            // add final object in db
            db.collection('checkouts').add(dataCheckout);
            // send response from server
            return res.json('done with the checkout');
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
    });
}