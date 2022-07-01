var push = require('web-push');

let vapidKeys ={
    publicKey: 'BLo4LyAdCsv2g5p9njRFTXWkaNn0sOZcU07yEsCpjiMQsJxQp9QO12_GE4tGP_-F-arrEJIwaTYW_Nljw9rMp90',
    privateKey: 'gdG5PXqFlXIfgPYPLUSunxxXEVPSZDfhylqkm5oGnDM'
}

push.setVapidDetails('mailto:test@test.co.uk', vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fQ0Ij4xa-h8:APA91bH8GoxHvkyiUsjvKgEU2sdxaebPE0S-nlll7uLUfCkJyB2lUT1vZcE-rC_LHrYZaRB99DaLmWU_38zFjrrWztLZr8rDhOJn2R27WTSSILDAi4u5vFGD2kkq50SqeRqMUHG5ui74",
    expirationTime:null,
    keys: { 
        "p256dh":"BNYlZ44r5lRcjkT0e2kinqo9Gy3Qd5N9TvbuosxF2aK0K8NXe5dvjtcgU_3s3EoO0_KQgsXMCPjwg_C5pSaowt4",
        auth:"nqUt8nFQoPJwjQ8LEQ3xkA"
    }
};

push.sendNotification(sub, 'test message');

