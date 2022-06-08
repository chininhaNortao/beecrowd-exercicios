package beecrowed.beecrowed;

import java.io.IOException;
import java.util.Scanner;

public class ex1005 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        double n1, n2;
        n1 = scanner.nextDouble();
        n2 = scanner.nextDouble();
        double res = ((n1 * 3.5) + (n2 * 7.5)) / 11;
        System.out.printf("MEDIA = %.5f",res);
        System.out.println("");
        
        scanner.close();
    }
}