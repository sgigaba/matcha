
socket = io.connect();

var handle = document.getElementById('handle');
var message = document.getElementById('message');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var intended = document.getElementById('intended');
var mess = document.getElementById('mess');

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message:message.value,
        handle: handle.value
    });
});

socket.on('chat', function(data){
    output.innerHTML += "<div class = 'row'> <div class='col-12 single-message'> <div class='user-message-container' style = 'float:right'>" + data.message + "</div></div></div>";
    mess.innerHTML += "<i class='far fa-dot-circle'></i>";
})
