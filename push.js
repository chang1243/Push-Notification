var push = require('web-push');

let vapidKeys ={
    publicKey: 'BLo4LyAdCsv2g5p9njRFTXWkaNn0sOZcU07yEsCpjiMQsJxQp9QO12_GE4tGP_-F-arrEJIwaTYW_Nljw9rMp90',
    privateKey: 'gdG5PXqFlXIfgPYPLUSunxxXEVPSZDfhylqkm5oGnDM'
}

push.setVapidDetails('mailto:test@test.co.uk', vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/eRUEyCn2pAg:APA91bFVGLyWqjuVNDc30uul7JGrMt77tDwKozBuBhbh0cVciuhKZQRCRKZNAgFUaLMJ1xPexItmHaGw0IWSzvWaVAw_TUUXXF-J9JhcBavGBsJAQ9-cqHGrGPWaGehJa-SpSjn0A3v-",
    expirationTime:null,
    keys:{
        p256dh:"BO9kX023lD8JwBbMX4ph_8lU9AV0CDF80pNlW60Pi4aL8tBBCM8ZA0nGbmO7R58o0ODB8TFS93xU785kqoo-s6Q",
auth:"-LrhG9NDx-8_5ARetH6eVQ"}}

push.sendNotification(sub, 'test message');

