const http = require('http');
const {appStart} = require('./app');
const port = process.env.PORT || 3000;
const app = appStart(port)
const server = http.createServer(app).listen(port, () => {
  console.log("server listening on port ", port)
});
