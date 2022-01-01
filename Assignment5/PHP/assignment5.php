<?php
class Sample{

public function chargescal($distance){
            $charge=0;
            $total=0;  
            if($distance<=0){
                return -1;
            }
            else if($distance>0  && $distance<2){
                        $charge=50;	
                        $total=$total+$charge;
                    }
            else if($distance>=2 && $distance<5){
                        $charge=20;	
                        $total=$total+$charge*$distance;
                        }
            else if($distance>=5 && $distance<15){
                        $charge=18;	
                        $total=$total+$charge*$distance;
                        }
            else if($distance>=15){
                        $charge=15;	
                        $total=$total+$charge*$distance;	
                        }
            return $total;
    }


public function evenodd($num){
     if($num%2==0)
    {return 1;}
    else
    {return 0;}
}

public function year_check($my_year){
    if ($my_year % 400 == 0)
      return true;
    else if ($my_year % 100 == 0)
       return false;
    else if ($my_year % 4 == 0)
       return true;
    else
       return false;
 }

 public function Palindrome($MyString) {
    $l = 0;
    $r = strlen($MyString) - 1;
    $res = 0;
  
    while($r > $l){
      if ($MyString[$l] != $MyString[$r]){
        $res = 1;
        break;
      }
      $l++;
      $r--;
      return $res;
    }
    } 
    public function medianofarray($arr){
        sort($arr);
        $len=sizeof($arr);
        if($len%2!=0){
            return $arr[$len/2];
        }else{
            return ($arr[($len-1)/2]+$arr[$len/2])/2.0;
        }
    }
}
?>
