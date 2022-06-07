/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package beecrowed.beecrowed;

import java.util.Scanner;

/**
 *
 * @author lucas
 */
public class ex1001 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        int A = input.nextInt();
        int B = input.nextInt();
        
        int X = A + B;
        
        System.out.println("X = "+X);
        input.close();
    }
}
