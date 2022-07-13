package beecrowed.beecrowed;

import java.io.IOException;
import java.util.Scanner;

public class ex1009 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        String nome;
        double salarioFixo, totalVendas;
        
        nome = scanner.nextLine();
        salarioFixo = scanner.nextDouble();
        totalVendas = scanner.nextDouble();
        
        double receber = (totalVendas * 0.15) + salarioFixo;

        System.out.printf("TOTAL = R$ %.2f", receber);
        System.out.println("");
        
        scanner.close();
    }
}