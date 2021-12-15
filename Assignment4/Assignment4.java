import java.util.*;  
    public class Assignment4{
    public static void main(String []args){
		System.out.println("Enter Distance:");
		Scanner sc= new Scanner(System.in);    
		int distance= sc.nextInt();
		sc.close();  
		int charge=0,total=0;  
		if(distance<=0){
			System.out.println("Invalid distance");
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
     		System.out.println("Total charge:"+total);
	}
}