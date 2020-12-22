const express =  require('express');
const weatherRoute = require('./routes/weather.js');
const cors = require('cors');
const path = require('path');

//Creando el servidor
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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

