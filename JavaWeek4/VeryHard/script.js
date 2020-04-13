function findCoins (coins, amount){
    var coins = [5, 10, 50]; 
    coins.sort((a, b) => b - a);
    var amount = 10;
    var fullCoins = 0; 
    for (var i = 0; i < coins.length; i++){
       var loopedFullCoins = Math.floor(amount/coins[i]) 
       fullCoins = fullCoins + loopedFullCoins 
       amount = amount - loopedFullCoins * coins[i]
    }
    if (amount === 0) { 
        return fullCoins;
    } else {
        return -1;
    }
  }
  console.log(findCoins())