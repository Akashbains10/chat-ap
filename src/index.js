const mongoose = require('mongoose');
const {createServer} = require('http');
const config = require('./config/config')
const app = require('./app');
const { startSocket } = require('./socket');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(()=> {
    const httpServer = createServer(app);
    startSocket(httpServer);
    console.log('Connected to MongoDB')
    httpServer.listen(config.port, ()=> {
        console.log(`Listening to port ${config.port}`)
    })
})
