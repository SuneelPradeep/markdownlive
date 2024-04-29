const express = require('express');
const {marked } = require('marked');
const http = require('http');
// const { Socket } = require('socket.io');
const server = http.createServer()
const io = require('socket.io')(server)

io.on('connection',(socket)=>{
    console.log('Socket connected');

    socket.on('markdown',(markdown)=>{
        try {      
            const htmloutput = marked(markdown)
            socket.emit('html',htmloutput)
        } catch (error) {
            console.log('error',error);
            socket.emit('html','Error converting Markdown')
            
        }
    })

    socket.on('disconnect', ()=>{
        console.log('Socket disconnected');
    })
})

// app.get('/',(req,res)=>{
//     res.send('Welcome to our app');
// })
// app.use(markedRoute)
server.listen(3005, ()=>{
    // console.log('connected to PORT 3005');
})