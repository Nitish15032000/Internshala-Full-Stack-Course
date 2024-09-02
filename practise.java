import java.util.*;

public class practise {

   public static void main(String[] args) {
      Scanner in = new Scanner(System.in);
      System.out.print("Enter the age : ");
      int age = in.nextInt();

      if (age>18) {
         System.out.println("adult");
      } else {
         System.out.println("not adult");
      }
   }
}