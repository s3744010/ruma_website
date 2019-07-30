console.log('server is starting.');

var express =  require('express');

var app = express();

var server = app.listen(8080);

function listening() {
    console.log("listening...");
}

app.use(express.static('src'));
app.use('/media', express.static('media'));
app.use('/css', express.static('css'));