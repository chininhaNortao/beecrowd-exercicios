package beecrowed.beecrowed;

import java.io.IOException;
import java.util.Scanner;

public class ex1007 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int a,b,c,d;
        a = scanner.nextInt();
        b = scanner.nextInt();
        c = scanner.nextInt();
        d = scanner.nextInt();
        int res = ((a*b) - (c*d));
        System.out.printf("DIFERENCA = %d", res);
        System.out.println("");
        
        scanner.close();
    }
}
