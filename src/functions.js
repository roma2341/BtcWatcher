function getTransaction() {
    let walletId = '5b8d9077e444261004b74ae735ea1d9d';
    let transactionId = '7d916e5d4a0c04148f6a4ddfc5312f88fecdcca1d58c033863b71cd0db3ca7d7';
    bitgo.wallets().get({ id: walletId }, function callback(err, wallet) {
        if (err) {
            throw err;
        }
        console.log('wallet:'+JSON.stringify(wallet));
        wallet.getTransaction({ 'id:': transactionId }, function (err, transaction) {
            console.log(JSON.stringify(transaction, null, 4));
        }
        );
    });
}

function getUser() {
    bitgo.me({}, function callback(err, user) {
        if (err) {
            // handle error
        }
        // console.log('user:'+JSON.stringify(user));
    });
}

function getCoins() {
    bitgo.coin('tbtc').wallets().list({})
        .then(function (wallets) {
            // print the wallets
            //console.dir(wallets);
        });
}

function getWalletByAddress(){
    let walletAddress = '2N17jPMgACLecM6XES5XrLCwRTHxadofBtY';
bitgo.coin('tbtc').wallets().getWalletByAddress({ address: walletAddress })
.then(function(wallet) {
  // print the wallet
  console.dir(wallet._wallet);
});
}

function getWalletById(walletId){
bitgo.coin('tbtc').wallets().get({ id: walletId })
.then(function(wallet) {
  // print the wallet
  listWalletTransfers(wallet);
  console.dir(wallet._wallet);
});
}

function listWalletTransfers(wallet){
    wallet.transfers()
.then(function(transfers) {
  // print transfers
  fs.writeFile("transfers", JSON.stringify(transfers), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    }); 
  //console.dir(transfers);
});
}

function getWallets() {
    bitgo.coin('tbtc').wallets().list({})
        .then(function (walletsResponse) {
            // print the wallets
            walletOperations(walletsResponse.wallets);
            //console.dir(wallets);
        });
}

function walletOperations(wallets) {
    for (wallet of wallets) {
        wallet.transfers()
            .then(function (transfers) {
                // print transfers
                //console.dir(transfers);
            });
    }
}