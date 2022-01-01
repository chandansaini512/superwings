package main;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class EvenoddTest {

	Evenodd evenodd=new Evenodd();
	
	@Test
	public void sample() {
		assertTrue(evenodd.utilfunc(89));
	}
}
