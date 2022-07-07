const express = require ('express')
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').Server(app);
const port = process.env.PORT || 3000

const fs = require('fs')
app.use('/static',express.static(__dirname + "/static"))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });



const server = http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}`);port
  });
  const io = require('socket.io')(server);

io.on('connection' ,socket=>{

socket.on('new-user-joined', name =>{
  console.log("new user",name);
  
    socket.data.name=name;
    socket.broadcast.emit('user-joined', socket.data.name);

})

socket.on('send', message =>{
    socket.broadcast.emit('receive', {message:message, name: socket.data.name})
});
socket.on('disconnect', message =>{
  socket.broadcast.emit('left', socket.data.name)
  // delete users[socket.id];
});

});


