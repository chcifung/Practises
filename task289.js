function checkCashRegister(price, cash, cid) {
  var change = [];
  var fund = cash-price;
  // Here is your change, ma'am. 124.31=100+20+4+0.25+0.06
  var money = [100,20,10,5,1,0.25,0.1,0.05,0.01];
  function changes(money,fund){
  	for(var i = 0;i<money.length;I==){
  		while(fund>=money[i]&&fund>0){
  			change.push(cid[10-i][0],);
  		}
  	}
  }

  return change;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);