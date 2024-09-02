const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const schedule = require('node-schedule');

setInterval(() => {
    const notification = {
        message: 'New notification!',
        timestamp: new Date()
    };
    io.emit('notification', notification);
}, 5000); // Every 5 seconds

let userInfos = [];

const findSchedule = (id) => {
    const response = fetch(`http:localhost:3000/schedule/${id}`);
    return response.data;
}

const sendNotification = (id, io) => {
    const user = userInfos.find((userInfo) => {
        return userInfo.id = id;
    })
    io.to(user.socket).emit("noti", schedule_detail.detail);
}

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('login', (id) => {
        userInfos = [...userInfos, { id, socket }];
        const schedules = findSchedule(id);
        for (let schedule_detail of schedules) {
            schedule_detail.schedule.info.scheduleJob(schedule, function(){
                sendNotification(id, io, schedule_detail);
            });
        }
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3010;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
