var socket = io.connect();

var sendtol = document.getElementById("notif");
var notifval = document.getElementById("Notifs");
var notifylike = document.getElementById("notifylike");
var messag = document.getElementById("messag");
var not = document.getElementById("not");

messag.addEventListener('click', function(){
    socket.emit('notify', {
    notifylike:notifylike.value
    });
    console.log("notifying : ");
    console.log(notifylike.value);
});

socket.on('notify', function(data){
    console.log("outputting");
    not.innerHTML += "<i class='far fa-heart'></i>";
})

