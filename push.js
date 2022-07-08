var push = require('web-push');

let vapidKeys ={
    publicKey: 'BLo4LyAdCsv2g5p9njRFTXWkaNn0sOZcU07yEsCpjiMQsJxQp9QO12_GE4tGP_-F-arrEJIwaTYW_Nljw9rMp90',
    privateKey: 'gdG5PXqFlXIfgPYPLUSunxxXEVPSZDfhylqkm5oGnDM'
}

push.setVapidDetails('mailto:test@test.co.uk', vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {endpoint:"https://fcm.googleapis.com/fcm/send/f-Vk1f11Cmw:APA91bGZkZlvsrQbMBG6oOsfCGCW1xkN2R3hlLmUezyKGgCBQ0impMAdxgMahSupFiscbqmyrRNYvejN3mM8blTf-Fk8by8Srr_DvP6-fd1pjaiwI2uoJBNgFrZoLytOpbMG7FVm19De",
expirationTime:null,
keys:{
    p256dh:"BJv35NHitorHksesgMxAtoCv4-av6BPUmnrAfI0tic54MoSYXUgQpcbr0nxb7zRfqj7rifmeABLZGQGq_eIDaLE",
    auth:"_-iWtAimXT9zJ42lIL_gzA"}};

push.sendNotification(sub, 'test message');

