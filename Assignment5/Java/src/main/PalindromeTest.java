package main;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class PalindromeTest {

	Palindrome temp=new Palindrome();
	
	@Test
	public void sample() {
		assertTrue(temp.utilfunc("madam"));
	}
	
}
