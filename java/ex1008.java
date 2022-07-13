package beecrowed.beecrowed;

import java.io.IOException;
import java.util.Scanner;

public class ex1008 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        int number,horasTrabalhadas;
        double valorHora;
        number = scanner.nextInt();
        horasTrabalhadas = scanner.nextInt();
        valorHora = scanner.nextDouble();

        double salario = (horasTrabalhadas * valorHora);
        System.out.printf("NUMBER = %d \n",number);
        System.out.printf("SALARY = U$ %.2f", salario);
        System.out.println("");
        
        scanner.close();
    }
}
