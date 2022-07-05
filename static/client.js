const io = require('socket.io');
const port = process.env.PORT || 3000;
socket.on('connect', ()=>{
    console.log('Connected to Server')
    
    });

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
const name=prompt("Enter name to join")

