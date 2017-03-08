
function convertToRoman(num) {
  var n0 = Math.floor(num/1000);
  var n1 = Math.floor((num-n0*1000)/100);
  var n2 = Math.floor((num-n0*1000-n1*100)/10);
  var n3 = num-n0*1000-n1*100-n2*10;
  var arr0 = [];
  arr0.push(n0,n1,n2,n3);
  var arr1 = [];
  
  switch(arr0[0]){
    case 1:
      arr1.push("M");
      break;
    case 2:
      arr1.push("MM");
      break;
    case 3:
      arr1.push("MMM");
      break;
    case 4:
      arr1.push("MC");
      break;
    case 5:
      arr1.push("C");
      break;
    case 6:
      arr1.push("M");
      break;
    case 7:
      arr1.push("M");
      break;
    case 8:
      arr1.push("M");
      break;
    case 9:
      arr1.push("M");
      break;
    default:
      break;
    
  }
  switch(arr0[1]){
    case 1:
      arr1.push("C");
      break;
    case 2:
      arr1.push("CC");
      break;
    case 3:
      arr1.push("CCC");
      break;
    case 4:
      arr1.push("CD");
      break;
    case 5:
      arr1.push("D");
      break;
    case 6:
      arr1.push("DC");
      break;
    case 7:
      arr1.push("DCC");
      break;
    case 8:
      arr1.push("DCCC");
      break;
    case 9:
      arr1.push("CM");
      break;
    default:
      break;
    
  }
  switch(arr0[2]){
    case 1:
      arr1.push("X");
      break;
    case 2:
      arr1.push("XX");
      break;
    case 3:
      arr1.push("XXX");
      break;
    case 4:
      arr1.push("XL");
      break;
    case 5:
      arr1.push("L");
      break;
    case 6:
      arr1.push("LX");
      break;
    case 7:
      arr1.push("LXX");
      break;
    case 8:
      arr1.push("LXXX");
      break;
    case 9:
      arr1.push("XC");
      break;
    default:
      break;
    
  }
  switch(arr0[3]){
    case 1:
      arr1.push("I");
      break;
    case 2:
      arr1.push("II");
      break;
    case 3:
      arr1.push("III");
      break;
    case 4:
      arr1.push("IV");
      break;
    case 5:
      arr1.push("V");
      break;
    case 6:
      arr1.push("VI");
      break;
    case 7:
      arr1.push("VII");
      break;
    case 8:
      arr1.push("VIII");
      break;
    case 9:
      arr1.push("IX");
      break;
    default:
      break;
    
  }
   
  var arr2 =arr1.join("");
  return arr2;
}

convertToRoman(36);
