const express = require('express');
const app = express();

app.use('/images', express.static(__dirname + '/src/images'));
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200);