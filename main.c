#include<stdio.h>

int Zdravo () 
{
   printf("Zdravo iz main-a opet")
   return 0;
}


int main(void) 
{
 printf("Zdravo iz main-a!!!");
 Zdravo();
 return 0; 
} 


