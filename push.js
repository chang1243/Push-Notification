var push = require('web-push');

let vapidKeys ={
    publicKey: 'BLo4LyAdCsv2g5p9njRFTXWkaNn0sOZcU07yEsCpjiMQsJxQp9QO12_GE4tGP_-F-arrEJIwaTYW_Nljw9rMp90',
    privateKey: 'gdG5PXqFlXIfgPYPLUSunxxXEVPSZDfhylqkm5oGnDM'
}

push.setVapidDetails('mailto:test@test.co.uk', vapidKeys.publicKey,vapidKeys.privateKey);

let sub = { 
    endpoint:"https://fcm.googleapis.com/fcm/send/d3EV09GBmx8:APA91bFfxJ9GxtWhpdKG7PKeEPQJ-EQoCaJZSu_iwDHJ2h31KHmUx2aZYfB5wEmINPKKc9Qno70x1oaCYvLqoGYNCOJyNvc8BF7JZ-sBS-WqMAMATxq58sqV0ocu3DVUVYhtD0wqpOtY",
    expirationTime :null,
    keys:{"p256dh":"BO956AumoLeawXf0ojdTe4eezwXg8yXnmd9qyLoag45qGu5utMKtuchqTO8HvAW_0SpWXQ1kCK5_Obgf-Rd76zw",
auth:"Zyshg2k6GaGWGTsZU-zt6w"}}

push.sendNotification(sub, 'test message');

