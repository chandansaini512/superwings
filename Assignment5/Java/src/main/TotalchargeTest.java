package main;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TotalchargeTest{

	Totalcharge totalcharge=new Totalcharge();
	
	@Test
	public void sample() {
		int sum=totalcharge.utilfunc(12);
		assertEquals(216,sum);	
	}
	

}
