function checkCashRegister(price, cash, cid) {
  var change = [];
  var fund = cash-price;
  // Here is your change, ma'am.
  var a = new Array();
  var b = [];
   a[1] = Math.floor(fund/100);
   a[2] = Math.floor((fund-100*a1)/20);
   a[3] = Math.floor((fund-100*a1-20*a2)/10);
   a[4] = Math.floor((fund-100*a1-20*a2-10*a3)/5);
   a[5] = Math.floor((fund-100*a1-20*a2-10*a3-5*a4)/1);
   a[6] = Math.floor((fund-100*a1-20*a2-10*a3-5*a4-1*a5)/0.25);
   a[7] = Math.floor((fund-100*a1-20*a2-10*a3-5*a4-1*a5-0.25*a6)/0.1);
   a[8] = Math.floor((fund-100*a1-20*a2-10*a3-5*a4-1*a5-0.25*a6-0.1*a7)/0.05);
   a[9] = Math.floor((fund-100*a1-20*a2-10*a3-5*a4-1*a5-0.25*a6-0.1*a7-0.05*a8)/0.01);

   b[1] = cid[0][1]/0.01;
   b[2] = cid[1][1]/0.05;
   b[3] = cid[2][1]/0.1;
   b[4] = cid[3][1]/0.25;
   b[5] = cid[4][1]/1;
   b[6] = cid[5][1]/5;
   b[7] = cid[6][1]/10;
   b[8] = cid[7][1]/20;
   b[9] = cid[8][1]/100;
  for(var i = 1;i<10;i++){
  	if(b[0-i]-a[i]){

  		change.push(cid[i-1][0],b[10-i]);
  	}else if(b[0-i]==a[i]){
  		change.push("Closed");
  	}else{
  		change.push("Insufficient Funds");
  	}
  }

  return change;
}