const admin = require('firebase-admin');

const serviceAccount = require('./firbase-serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const  testDeviceToken = "eXip8LZ0QBWb8lFKOlmurd:APA91bEbobH9IGWZC1a57xuSL7iTUaElH4exw-u5kgMc-iHPLh7ZF575ok8ZMNVqk5C_L9tI3HASy_a1T7GOz2LwZgyggkTNs5o_MRBPW3S2D2YWvX1YM8AhX8ihsxPb7S2el1NVmOYA";

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