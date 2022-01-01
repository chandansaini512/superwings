package main;

import java.util.Arrays;

public class Medianofarray {

	public double utilfunc(double arr[]) {
		Arrays.sort(arr);
		int len=arr.length;
		if(len%2!=0) {
			return (double)arr[(len/2)];
		}else {
			return (double)(arr[(len-1)/2]+arr[len/2])/2.0;
		}
	}
}
