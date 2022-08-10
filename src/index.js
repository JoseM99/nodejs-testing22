const express= require('express');
const app = express();
const morgan = require('morgan');
 

//setting
app.set('port',process.env.PORT || 3000 );

//middleware
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/',require('./routes/movies'));


app.listen(3000,() => {
    console.log(`Iniciando el Servidor en el puerto.. ${3000}`);
});