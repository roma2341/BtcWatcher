var BitGoJS = require('bitgo');
var BitgoConfig = require('./config/bitgo.config');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var db = require('./models');

console.log('bitgoconfig:'+JSON.stringify(BitgoConfig));
var app = express();
var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: BitgoConfig.ACCESS_TOKEN });
//init
app.use(bodyParser.json());

//MAPPINGS

app.post('/add_user',function(req,res){
    let user = req.body;
    db.User.create(user).then(user=>{
        res.send(JSON.stringify(user)); 
    });
})

app.post('/generate_order',function(req,res){
    let order = {
        paymentAddress:"2N9iwJFgf1nnSMHAZsJwT8SYofXygwhBHAz",
        userId:req.body.userId
    };
    db.UserOrder.create(order).then(order=>{
        res.send(JSON.stringify(order)); 
    });
})

app.post('/get_orders',function(req,res) {
    let criteria = req.body;
    db.UserOrder.findOne({ where: criteria }).then(result => {
        res.send(res.send(result));
    });
})

app.post('/get_payments',function(req,res){
    let criteria = req.body;
    db.UserPayment.findOne({ where: criteria }).then(result => {
        res.send(res.send(result));
    })
})

//OTHER

app.listen(BitgoConfig.PORT, function () {
    console.log('Example app listening on port ' + BitgoConfig.PORT);
});

/*
app.get('/', function (req, res) {
    getWallets();
    getCoins();
    res.send('Hello World!');
});

app.post('/:name', (req, res) => {
    console.log('named callback called');
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
            });
})
*/



