using System;
namespace calculation{
class Program{
static void Main(string[] args){
		Console.WriteLine("Enter Distance:");
		int distance = Convert.ToInt32(Console.ReadLine());
		int charge=0,total=0;
		if(distance<=0){
			Console.WriteLine("Invalid Distance");
				}  	
		else if(distance<2){
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
		else if(distance >= 15){
				charge=15;	
				total=total+charge*distance;	
				}
		Console.WriteLine("Charges are: "+total);
		Console.ReadLine(); 
		}
	}
}


