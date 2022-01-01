const evenodd = (num) => num%2==0?1:0;
const palindrome = (string) => 
{
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return 0
      }
  }
  return 1;
}
const totalcharges = (distance) => {
    var charge=0;
    var total=0;  
      if(distance<=0){
        return -1;
      }
      else if(distance>0 && distance<2){
          charge=50;	
          total=total+charge;
      }
        else if(distance>=2 && distance<5){
        charge=20;	
          total=total+charge*distance;
      }
        else if(distance>=5 && distance<15){
        charge=18;	
          total=total+charge*distance;
      }
        else if(distance>=15){
        charge=15;	
          total=total+charge*distance;	
      }
      return total;
}
const leapyear = (year) => {
 
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      return 1;
  } else {
      return 0;
  }
}

const medianofarray=(values)=> {
  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);
  
  if (values.length % 2)
    return values[half];
  
  return (values[half - 1] + values[half]) / 2.0;
}

module.exports = {
  evenodd,
  palindrome,
  medianofarray,
  leapyear,
  totalcharges,
};