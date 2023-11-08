const eventEmitter = require('./eventEmitter');

// Register event listeners
eventEmitter.on('userLoggedIn', (username,number) => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString();

    console.log(`${formattedDate}: User ${username}, ${number} logged in.`);
});

eventEmitter.on('userLoggedOut', (username,number) => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString();
    console.log(`${formattedDate}:User ${username}, ${number} logged out.`);
});


//eventEmitter.emit('userLoggedIn', 'Bob', 1)
//eventEmitter.emit('userLoggedOut', 'Bob', 1)

setInterval(() => {
    eventEmitter.emit('userLoggedIn', 'Bob', 1);
}, (Math.random() * 1.9) + 0.1);

