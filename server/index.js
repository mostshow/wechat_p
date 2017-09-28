

import express from 'express'
import path from 'path'
import apiRouter from './routes/apiRouter'
import config from './config'

let compiler = ''
let app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.use('/api',apiRouter);

app.get('/*' ,(req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(config.httpPort, () => console.log("You can debug your app with http://" + config.localhost + ':' +config.httpPort ))


