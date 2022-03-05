//Make connection
var socket = io.connect('https://nschat2022.herokuapp.com/');

//Query DOOM
var message = document.getElementById('msg');
var handle = document.getElementById('name');
var btnSend = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Emit events
btnSend.addEventListener('click',function (){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value

    });
});

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value);
});



//Listen for events
socket.on('chat',function(data){
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});

socket.on('typing',function(data){
    feedback.innerHTML += '<p><em>'+data+' is typing a message...</em></p>';
});
