const express =  require('express');
const weatherRoute = require('./routes/weather.js');
const cors = require('cors');

//Creando el servidor
const app = express();

//Habilitando CORS
app.use(cors());

//Definiendo las rutas
app.use('/api/weather/', weatherRoute);

//Puerto
const port = process.env.PORT || 4000;

//Iniciando el server
app.listen(port, ()=>{
    console.log('Server running...');
});

