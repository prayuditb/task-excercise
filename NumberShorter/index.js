
function shorter(number){
    function formatString(num, unit){
      num = num.toString();
      split = num.split('.');
      if(typeof split[1] != 'undefined'){
        split[1] = split[1].substr(0, 2);
        
        if (split[1][0] == '0') {   
            result = split[0] + ' '+ unit;
        } else if(split[1][1] == '0') { 
          result = split[0] +'.'+ split[1][0]+ ' '+ unit;
        } else { 
          result = split[0] +'.'+ split[1]+ ' '+ unit;
        }
        return result;

      } else{
        return split[0] +' '+unit;
      }
     
    }
 
    if(number / 1000000 >= 1){
      temp = number / 1000000;
      return formatString(temp, 'M')  
    } else if(number / 1000 >= 1 ){
        temp = number / 1000;
        return formatString(temp, 'K')
    } else {
      temp = number.toFixed(1);
      split = temp.split('.');
      if (split[1] == '0'){
        return split[0];
      }
      return temp;
    }
    
}
shorter(1000);


console.log(shorter(1234.5));
console.log(shorter(1000000));
console.log(shorter(12.50));
console.log(shorter(1999));

