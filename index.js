const http = require('http');

// Configura el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, MundosE! Paso a la Inmortalidad del Gral. Jose de San Martin\n');
}); 

// Inicia el servidor y escucha en el puerto configurado
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
  