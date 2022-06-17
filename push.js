var push = require('web-push');

let vapidKeys ={
    publicKey: 'BLo4LyAdCsv2g5p9njRFTXWkaNn0sOZcU07yEsCpjiMQsJxQp9QO12_GE4tGP_-F-arrEJIwaTYW_Nljw9rMp90',
    privateKey: 'gdG5PXqFlXIfgPYPLUSunxxXEVPSZDfhylqkm5oGnDM'
}

push.setVapidDetails('mailto:test@test.co.uk', vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');

