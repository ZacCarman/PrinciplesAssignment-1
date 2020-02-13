var temp=0;
var temp2=0;
var temp5=0;
var temp4=0;
var temp3=0;
var express = require('express');
var app = express();

var server = require('http').createServer(app);

app.get('/',function(req, res) {
 res.sendFile(__dirname + '/client/text.html');
});
app.use('/client',express.static(__dirname + '/client'));


console.log("Server started.");

SOCKET_LIST = {};
// var temp3=0;
var io = require('socket.io')(server);
io.sockets.on('connection', function(socket){

        console.log('new user!');
        temp3++;
        //console.log(temp3);
        //var socketId = Math.random();
    //     var socketId;
    //
    //     socketId = 1;
    //   //  console.log(socketId);
    // // var temp =0;
    // //     if(players[socketId] == null && temp ==0){
    // //       socketId = 1;
    // //
    // //       temp++;
    // //     } else{
    // //       socketId = 2;
    // //     }
    //
    // for(var i in SOCKET_LIST){
    //   if(SOCKET_LIST[i] != null){
    //     socketId = 2;
    //   }else{
    //     socketId = 1;
    //   }
    // }
    //     SOCKET_LIST[socketId] = socket;
//  console.log(SOCKET_LIST[socketId]);
        // socket.on('sendMsgToServer',function(data){                          TESTING IF NEEDED
        //
        //     console.log('someone sent a message!');
        //     for(var i in SOCKET_LIST){
        //     SOCKET_LIST[i].emit('addToChat', data);
        //
        //     }
        //
        // });

        socket.on('disconnect',function(){

            delete SOCKET_LIST[socket.id];

 });




});


            server.listen(5000);


console.log("Server started.");
var players = {};
var gameState = 0;
//the ai's move selection
//var botSelection = 0;

function selectMove () {
    //generate a random number 0, 1, or 2 to decide what move to make for the AI
                            //var botSelection = Math.floor(Math.random() * Math.floor(3));
    //game is in result state
    gameState = 1;
    //send the ai's move to all connected players
                            // for(var i in players){
                            //     var playerWin = playerWinCheck(players[i].move);
                            //     if(playerWin){
                            //         players[i].score += 1;
                            //     }
                            //     players[i].socket.emit('gameResultState', botSelection, playerWin, players);
                            // }
}
function playerWinCheck (move){
    var playerWins = false;

    //player chose rock
    if(move == 0){
    //rock beats scissors
      if(botSelection == 2){
        playerWins = true;
        }
    }
    //player chose paper
    if(move == 1){
    //paper beats rock
      if(botSelection == 0){
        playerWins = true;
        }
    }
    //player chose scissors
    if(move == 2){
        //scissors beats paper
      if(botSelection == 1){
        playerWins = true;
        }
    }
    return playerWins;
}
setInterval(function(){
            //select a move every 3 seconds
            selectMove();
          }, 1000);
            io.sockets.on('playerMove',function(data){
              Object.keys(SOCKET_LIST).forEach(function eachKey(key) {
                if(SOCKET_LIST[key] == socket){
                  console.log('player selected: ' + data);
                  var thisPlayer = players[key];
                  console.log('Players' + players[key])
                  thisPlayer.move = data;
                }
            });
});









// var temp4=0;

function setTemp4(temp3){
  temp4 =temp3;
}

//var socketId=1;
// var temp=0;
// var temp2=0;
// var temp5=0;
var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function() {

  });
  socket.on('playerMove', function(data ) {
    players[socket.id] = {
    move: 0
    };

    // for(var i in SOCKET_LIST){
    //   if(SOCKET_LIST[i] != null){
    //     socketId = 2;
    //   }else{
    //     socketId = 1;
    //     SOCKET_LIST[socketId] = socket;
        //console.log(socket);
        console.log("temp4");
        console.log(temp4);
        console.log("temp3");
        console.log(temp3);
        console.log("temp5");
        console.log(temp5);
    var player = players[socket.id] || {};
    if(temp5==90){
      setTemp4(temp3);
    }
    if (temp3==temp4){
      move1 = data;
        console.log("Move1");
      console.log(move1);

      temp2++;
    }else{
      move2 =data
        temp5=90;
        console.log("Move2");
      console.log(move2);
      temp++
    }
  console.log("temp1");
    console.log(temp);
    console.log("temp2");
    console.log(temp2);
    console.log("temp3");
    console.log(temp3);
    console.log("temp4");
    console.log(temp4);
    console.log("temp5");
    console.log(temp5);
    if(temp>0&&temp2>0){
  socket.emit('gameSelectionState',move1,move2);
}
   // if(move ==0)
   // {
	 //  //players.move=0;
   //
   //   socket.emit('gameSelectionState',move);
   // }
   // if(move ==1)
   // {
	 //   //players.move=1;
   //
   //   socket.emit('gameSelectionState',move);
   // }
   // if(move ==2)
   // {
	 //   //players.move=2;
   //
   //    socket.emit('gameSelectionState',move);
   // }

  });
});

setInterval(function() {
  io.sockets.emit('state', players);
}, 1000/60);
