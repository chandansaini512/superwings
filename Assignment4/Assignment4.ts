var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
  });
rl.question("Enter distance: ",(distance: number) => { 
var charge=0;
var total=0;  
	if(distance<=0){
		console.log('Invalid distance');
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
        console.log(`Total charge is: ${total}`);

rl.close();
});