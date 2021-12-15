distance = int(input("Enter distance: "))
total=0
charge=0
if distance<=0:
   print("Invalid distance")
elif distance>0 and distance<2:
   charge=50
   total=total+charge
elif distance>=2 and distance<5:
   charge=20;	
   total=total+charge*distance
elif distance>=5 and distance<15:
   charge=18;	
   total=total+charge*distance
else:
   charge=15;	
   total=total+charge*distance
    
print ("Total charge:",total)
