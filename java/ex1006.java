package beecrowed.beecrowed;

import java.io.IOException;
import java.util.Scanner;

public class ex1006 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        double n1, n2, n3;
        n1 = scanner.nextDouble();
        n2 = scanner.nextDouble();
        n3 = scanner.nextDouble();
        
        double res = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
        System.out.printf("MEDIA = %.1f", res);
        System.out.println("");
        
        scanner.close();
    }
}