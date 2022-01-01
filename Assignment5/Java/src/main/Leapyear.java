package main;

public class Leapyear {

	public static boolean isLeapYear(int year_in) {
        if (year_in % 100 == 0 && year_in % 400 != 0) {
            return false;
        }
        return (year_in % 4 == 0);
    }

}
