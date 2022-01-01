package main;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class Leapyeartests {


	@Test
	void testLeapYear() {
		assertTrue(Leapyear.isLeapYear(1996));
	}
}
