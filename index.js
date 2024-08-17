const http = require('http');

// Configura el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, MundosE! 17/08 Paso a la inmortalidad del Gral San Martin, perdieron los pumas, Escuancho las Pastillas del Abuelo\n');
}); 

// Inicia el servidor y escucha en el puerto configurado
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
  