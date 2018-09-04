var BitGoJS = require('bitgo');
var ACCESS_TOKEN = 'v2x0c637bfb5e4f1f69cd9104e2aedd97389354fb53f10d7e7073a8e6931dec97d1';
var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: ACCESS_TOKEN });

const http = require('http')
const port = 3000
const requestHandler = (request, response) => {
    console.log(request.url);
    response.write('test');
    //getUser();
    getWallets();
    getCoins();
    response.end('Hello Node.js Server!')

}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

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
        console.dir(transfers);
        });
    }
}