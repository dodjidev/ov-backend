const admin = require('firebase-admin');

const serviceAccount = require('./ov-backend-firebase-adminsdk-32hbq-6a6d8ea995.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const  testDeviceToken = "dOzAVkZTTNm_HtlGCRCAGY:APA91bHvzhdJTtRNpn3UF8f_dMw5U9-E7Z7E5tMj7tMqgaNVL5icM2AMB5g0HyWdZYmC3DKXONngFh3kVGMiudOQ-RL-eDyKI79a81lBa_5GwRvslWy0eSKY7rOparOjBBZ3kx097UTV";

exports.sendMensageToDevice = (title , body)=>{
     const payload = {
        notification: {
            title: title || "Test notification",
            body: body || "Notification sent for test"
        }
     }
     options = {
        priority: "high"
     }

     admin.messaging().sendToDevice(testDeviceToken, payload , options )
     .then(response => console.log('response:' , response))
     .catch(error => console.log('error:', error.message))
}