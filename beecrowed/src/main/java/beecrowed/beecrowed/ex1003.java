package beecrowed.beecrowed;

import java.io.IOException;
import java.util.Scanner;

public class ex1003 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int n1, n2;
        n1 = scanner.nextInt();
        n2 = scanner.nextInt();
        int res = n1 +n2;
        System.out.println("SOMA = "+res);
        
        scanner.close();
    }
}