<?php
$distance=(int)readline('Enter distance: ');
$charge=0;
$total=0;  
if($distance<=0){
	echo "Invalid Distance!!";
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
echo $total . "\n";
?>