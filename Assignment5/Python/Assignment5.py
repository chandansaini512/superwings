import unittest
import math
def evenodd(num):
    if(num%2==0):
        return True
    else:
        return False

def isPalindrome(s):
    return s == s[::-1]

def CheckLeap(Year):  
  if((Year % 400 == 0) or  
     (Year % 100 != 0) and  
     (Year % 4 == 0)):   
    return True   
  else:  
    return False

def CheckLeap(Year):  
  if((Year % 400 == 0) or  
     (Year % 100 != 0) and  
     (Year % 4 == 0)):   
    return True   
  else:  
    return False

def calculate_median(l):
    l = sorted(l)
    l_len = len(l)
    if l_len < 1:
        return None
    if l_len % 2 == 0 :
        return ( l[(l_len-1)/2] + l[(l_len+1)/2] ) / 2.0
    else:
        return l[math.floor((l_len-1)/2)]

def totalcharges(distance):
    total=0
    if distance<=0:
        return -1
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
    return total

class TestStringMethods(unittest.TestCase):
    def setUp(self):
        pass
    def test_strings_a(self):
        self.assertTrue(isPalindrome("racecar"))
    def test_upper(self):        
        self.assertTrue(evenodd(6))

    def test_isupper(self):        
        self.assertTrue(CheckLeap(1996))

    def test_strip(self):        
        self.assertEqual(216,totalcharges(12))

    def test_istemp(self):
        self.assertEqual(2,calculate_median([2,4,5,7,3,1,1]))


if __name__ == '__main__':
    unittest.main()

