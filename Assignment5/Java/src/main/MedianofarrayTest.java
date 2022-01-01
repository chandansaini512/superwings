package main;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class MedianofarrayTest {

	Medianofarray temp=new Medianofarray();
	
	@Test
	public void sample() {
		double fArr[] = {3.1, 1.4, 2.7, 11.5, 8.7,2.9};
		assertEquals(3,temp.utilfunc(fArr),0);
	}
	
}
