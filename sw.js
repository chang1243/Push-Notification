// self.addEventListener('push',() => {
//     self.registration.sendNotification('test message', {});
// })
// self.addEventListener('push', fuction(e) {
//     var : options = {
//         body: 'This notification was generated from a push!',
//         icon: 'images/example.png',
//         vibrate: [100,50,100],
//         date: {
//             dateOfArrival: date.now(),
//             primaryKey: '2'
//         },
//         actions: [
//             {
//                 action: 'explore',title: 'Explore this new world',
//                 icon: 'images/checkmark.png'
//             },
//             {
//                 action: 'close', title: 'Close',
//                 icon: 'images/xmark.png'
//             },
//         ]
            
//     },
    
// });
self.addEventListener('push' , function(e){
var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
     vibrate: [100,50,100],
     date: {
             dateOfArrival: Date.now(),
               primaryKey: '2'
              },

              actions: [
                 {
                action: 'explore',title: 'Explore this new world',
                icon: 'images/checkmark.png'
                 },
                 {
                action: 'close', title: 'Close',
                 icon: 'images/xmark.png'
                 },
                ]
     };
     e.waitUntil(self.registration.showNotification('Hello World',options));
});