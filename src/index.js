var BitGoJS = require('bitgo');
var ACCESS_TOKEN = 'v2x0c637bfb5e4f1f69cd9104e2aedd97389354fb53f10d7e7073a8e6931dec97d1';
var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: ACCESS_TOKEN });

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var mainController = require('./controllers/main.controller.js');

const port = 3000

// parse application/json
app.use(bodyParser.json());
  

app.get('/', function (req, res) {
    getWallets();
    getCoins();
    res.send('Hello World!');
  });

app.get('/:name',(req, res) => {
        // Extract the name from the request parameters
        let { name } = req.params;
        console.log('name:'+name);
        res.send('ok');
    })

    app.post('/:name',(req, res) => {
        // Extract the name from the request parameters
        let { name } = req.params;
        console.log('name:'+name);
        console.log('body:'+JSON.stringify(req.body));
        res.send('ok');
    })
  
  app.listen(port, function () {
    console.log('Example app listening on port ' + port);
  });

 function getUser(){
    bitgo.me({}, function callback(err, user) {
        if (err) {
          // handle error
        }
       // console.log('user:'+JSON.stringify(user));
      });  
}

function getCoins(){
        bitgo.coin('tbtc').wallets().list({})
        .then(function(wallets) {
        // print the wallets
        //console.dir(wallets);
        });
}

function getWallets(){
    bitgo.coin('tbtc').wallets().list({})
.then(function(walletsResponse) {
  // print the wallets
  walletOperations(walletsResponse.wallets);
  //console.dir(wallets);
});
}

function walletOperations(wallets){
    for(wallet of wallets){
        wallet.transfers()
        .then(function(transfers) {
        // print transfers
        //console.dir(transfers);
        });
    }
}