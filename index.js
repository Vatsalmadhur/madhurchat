const express = require ('express')
const app = express();
const http = require('http').Server(app);

const fs = require('fs')
app.use('/static',express.static(__dirname + "/static"))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });



const server = http.listen(3000, () => {
    console.log(`Socket.IO server running at http://localhost:3000`);
  });
  const io = require('socket.io')(server);

io.on('connection' ,socket=>{

socket.on('new-user-joined', name =>{
  console.log("new user",name);
  
    socket.data.name=name;
    socket.broadcast.emit('user-joined', socket.data.name);

})

socket.on('send', message =>{
    socket.broadcast.emit('receive', {message:message, name: users[socket.id]})
});
socket.on('disconnect', message =>{
  socket.broadcast.emit('left', socket.data.name)
   delete users[socket.id];
});

});


