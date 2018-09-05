var BitGoJS = require('bitgo');
var ACCESS_TOKEN = 'v2x0c637bfb5e4f1f69cd9104e2aedd97389354fb53f10d7e7073a8e6931dec97d1';
var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: ACCESS_TOKEN });

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
//var mainController = require('./controllers/main.controller.js');

let port = 3000;

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    getWallets();
    getCoins();
    res.send('Hello World!');
});

app.post('/:name', (req, res) => {
    console.log('named callback called');
    // Extract the name from the request parameters
    let { name } = req.params;
    console.log('wallet address:'+req.body.wallet);
    getWalletById(req.body.wallet);
    console.log('name:' + name);
    console.log('body:' + JSON.stringify(req.body));
    res.send('ok');
})
app.get('/tt', (req, res) => {
    console.log('test transaction callback called');

        let walletId = '5b8d9077e444261004b74ae735ea1d9d';
        let txHash = '7d916e5d4a0c04148f6a4ddfc5312f88fecdcca1d58c033863b71cd0db3ca7d7';


            bitgo.coin('tbtc').wallets().get({ id: walletId })
            .then(function(wallet) {
              // print the wallet
              wallet.getTransaction({ txHash: txHash }, function (err, transaction) {
                res.write(JSON.stringify(transaction, null, 4));
                });
              //console.dir(wallet._wallet);
            });
            

    // Extract the name from the request parameters
    //res.send('ok');
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});




