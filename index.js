const express = require('express')
const app = express();
const path = require('path');
const indexRoutes = require('./src/routes/')
const { dirname } = require('path');
//setings
app.set('port', 8000)
app.set('views', path.join(__dirname, 'src/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//middlewares


//routes
app.use(indexRoutes)

//static files
app.use(express.static(path.join(__dirname, 'src/public')))
//listening
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})