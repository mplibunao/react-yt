const express = require('express'),
      path = require('path'),
      port = process.env.PORT || 8080,
      app = express();

// Express Middleware that serves static files (bundle.js)
app.use(express.static(__dirname));

// App route that responds with the serving the HTML page
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);

console.log('Server started');