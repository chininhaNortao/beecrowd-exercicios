package beecrowed.beecrowed;

import java.io.IOException;
import java.util.Scanner;

import java.util.*;

public class ex1010 {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        String entrada1, entrada2;
        String[] arr1, arr2;

        Deque<String> array1 = new ArrayDeque<String>();
        Deque<String> array2 = new ArrayDeque<String>();

        int codigo1, numero1, codigo2, numero2;
        double valor1, valor2;
        
        entrada1 = scanner.nextLine();
        arr1 = entrada1.split(" ",-1);
        
        entrada2 = scanner.nextLine();
        arr2 = entrada2.split(" ",-1);
        
        for (String a : arr1){
            array1.add(a);
        }
        codigo1 = Integer.parseInt(array1.pop());
        numero1 = Integer.parseInt(array1.pop());
        valor1 = Double.parseDouble(array1.pop());

        for (String b : arr2){
            array2.add(b);
        }
        codigo2 = Integer.parseInt(array2.pop());
        numero2 = Integer.parseInt(array2.pop());
        valor2 = Double.parseDouble(array2.pop());

        double total1, total2;
        total1 = numero1 * valor1;
        total2 = numero2 * valor2;

        System.out.printf("VALOR A PAGAR: R$ %.2f", (total1 + total2));
        System.out.println("");
        
        scanner.close();
    }
}
