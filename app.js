var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

  // view engine setup
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const server = require("http").Server(app);
const io = require("socket.io")(server);

  app.use(function (req, res, next) {
    res.io = io;
    var nodeEmailer = require("./email");


    var connection = function (socket) {
      socket.emit("conec");
     
      socket.on('createMessage', (data) => {

        console.log("connection");

        nodeEmailer.sendEmail({
          from: '"ARTHUR SOON PHOTOGRAPHE" <admin@arthursoon.com>',
          to: data.email,
          subject: 'MESSAGE',
          text: 'Votre message a bien été envoyé. Nous vous contacterons des que possible. Arthur SOON',
        });

        nodeEmailer.sendEmail({
          from: '"ARTHUR SOON PHOTOGRAPHE" <admin@arthursoon.com>',
          to: "davidhiguet@gmail.com",
          subject: 'ARTHUR SOON MESSAGE',
          text: 'Message de ' + data.nom + ' ' + data.prenom + ' (email = ' + data.email + ' ). " ' + data.message + '" '
        });
        socket.emit("messageCreate");
      });

    }

    res.io.once("connection", function (socket) {
      console.log("connectionio");
      connection(socket);
    });
  });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = { app: app, server: server };
